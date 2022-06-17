package com.jinkyumpark.incomemanagement.main;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@RestController
@RequestMapping("/")
public class MainController {
    @GetMapping
    public Map getMain(HttpServletRequest request) {
        return Map.of("loginUser", request.getSession().getAttribute("loginUser"));
    }
}
