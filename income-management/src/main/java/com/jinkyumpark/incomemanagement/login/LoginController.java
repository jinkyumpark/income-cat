package com.jinkyumpark.incomemanagement.login;

import com.jinkyumpark.incomemanagement.member.Member;
import com.jinkyumpark.incomemanagement.member.MemberController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Map;

@RestController
@RequestMapping("/v1/login")
public class LoginController {

    @Autowired
    LoginService loginService;

    @Autowired
    MemberController memberController;

    @RequestMapping("/kakao")
    public Map KakaoLoginCallBack(@RequestParam String code, HttpServletRequest request) {
        String accessToken = loginService.getKakaoAccessToken(code);
        Map<String, Object> user = loginService.getKakaoUserInfo(accessToken);

        Long id = (Long) user.get("id");
        String email = (String) user.get("email");

        Member memberByEmail = memberController.getMemberByEmail(email);

        if(memberByEmail == null) {
            Member newMember = new Member(id, email);
            memberController.addMember(newMember);
            request.getSession().setAttribute("loginUser", email);
            return Map.of("message", email + "(으)로 가입 됐어요");
        }

        HttpSession session = request.getSession();
        session.setAttribute("loginUser", email);

        return Map.of("message", email + "(으)로 로그인 됐어요");
    }
}