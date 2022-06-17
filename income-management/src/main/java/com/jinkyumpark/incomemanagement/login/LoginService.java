package com.jinkyumpark.incomemanagement.login;

import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import org.springframework.stereotype.Service;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Map;

@Service
public class LoginService {

    public String getKakaoAccessToken(String code) {
        String REQUEST_URL = "https://kauth.kakao.com/oauth/token";
        String CLIENT_ID = "275a6d69ef69fd06acf31e286ca672dd";
        String REDIRECT_URI = "http://localhost/v1/login/kakao";

        String accessToken = "";

        try {
            HttpURLConnection connection = getConnection(REQUEST_URL);

            passParameterWithStream(connection.getOutputStream(), Map.of(
                    "clientId", CLIENT_ID,
                    "redirectUri", REDIRECT_URI,
                    "code", code
            ));

            String response = getResponseAsString(connection.getInputStream());

            accessToken = parseJsonAsString(response, "access_token");
        } catch (IOException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }

        return accessToken;
    }

    private HttpURLConnection getConnection(String requestUrl) throws IOException {
        URL url = new URL(requestUrl);
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("POST");
        connection.setDoOutput(true);
        return connection;
    }

    private String getResponseAsString(InputStream inputStream) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
        String line = "";
        String result = "";

        while ((line = bufferedReader.readLine()) != null) {
            result += line;
        }
        bufferedReader.close();
        return result;
    }

    private String parseJsonAsString(String json, String key) {
        JsonParser parser = new JsonParser();
        JsonElement element = parser.parse(json);
        return element.getAsJsonObject().get(key).getAsString();
    }

    private void passParameterWithStream(OutputStream outputStream, Map info) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(outputStream));
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("grant_type=authorization_code");
        stringBuilder.append("&client_id=" + info.get("clientId"));
        stringBuilder.append("&redirect_uri=" + info.get("redirectUri"));
        stringBuilder.append("&code=" + info.get("code"));
        bufferedWriter.write(stringBuilder.toString());
        bufferedWriter.flush();
        bufferedWriter.close();
    }

    public Map<String, Object> getKakaoUserInfo(String token) {

        String REQUEST_URI = "https://kapi.kakao.com/v2/user/me";
        Long id = null;
        String email = null;

        try {
            HttpURLConnection connection = getConnection(REQUEST_URI);
            connection.setRequestProperty("Authorization", "Bearer " + token);

            String response = getResponseAsString(connection.getInputStream());

            //Gson 라이브러리로 JSON파싱
            JsonParser parser = new JsonParser();
            JsonElement element = parser.parse(response);
            id = element.getAsJsonObject().get("id").getAsLong();

            boolean hasEmail = element.getAsJsonObject().get("kakao_account").getAsJsonObject().get("has_email").getAsBoolean();

            if(hasEmail){
                email = element.getAsJsonObject().get("kakao_account").getAsJsonObject().get("email").getAsString();
            }

        } catch (IOException e) {
            e.printStackTrace();
        }

        Map<String, Object> user = Map.of(
                "id", id,
                "email", email
        );

        return user;
    }
}