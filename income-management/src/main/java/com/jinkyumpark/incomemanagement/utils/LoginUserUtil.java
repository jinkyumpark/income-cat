//package com.jinkyumpark.incomemanagement.utils;
//
//import com.jinkyumpark.incomemanagement.member.Member;
//import org.springframework.context.annotation.Bean;
//import org.springframework.security.core.context.SecurityContextHolder;
//
//public class LoginUserUtil {
//
//    @Bean
//    public String getLoginUserEmail() {
//        Object principal = SecurityContextHolder
//                .getContext()
//                .getAuthentication()
//                .getPrincipal();
//
//        if(principal instanceof Member) {
//            String email = ((Member) principal).getEmail();
//            return email;
//        } else {
//            String email = principal.toString();
//            return email;
//        }
//    }
//
//}
