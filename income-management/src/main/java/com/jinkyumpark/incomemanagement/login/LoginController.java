package com.jinkyumpark.incomemanagement.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/login")
public class LoginController {

    @Autowired
    LoginService loginService;

    @RequestMapping("/kakao")
    public void KakaoLoginCallBack(@RequestParam String code) {
        System.out.println(loginService.getAccessTokenKakao(code));
    }
}
