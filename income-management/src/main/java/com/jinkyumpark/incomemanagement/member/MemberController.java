package com.jinkyumpark.incomemanagement.member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import javax.validation.constraints.Email;

@RestController
@RequestMapping("/v1/member")
public class MemberController {
    private final MemberService ms;

    @Autowired
    public MemberController(MemberService ms) {
        this.ms = ms;
    }

    @GetMapping("/{email}")
    public Member getMemberByEmail(@RequestParam(value = "email") @Email String email) {
        return ms.selectMemberByEmail(email);
    }

    @PostMapping
    public void addMember(@RequestBody @Valid Member member) {
        ms.insertMember(member);
    }

    @PostMapping("/login")
    public void login(@RequestBody @Valid Member member, HttpServletRequest request) {
        ms.login(member, request);
    }

    @PutMapping
    public void editMember(@RequestBody @Valid Member member) {
        ms.editMember(member);
    }

    @DeleteMapping
    public void deleteMember(@RequestBody @Valid Member member) {
        ms.deleteMember(member);
    }
}