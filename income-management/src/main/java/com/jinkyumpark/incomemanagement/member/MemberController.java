package com.jinkyumpark.incomemanagement.member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import javax.validation.constraints.Email;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/v1/member")
public class MemberController {
    private final MemberService memberService;

    @Autowired
    public MemberController(MemberService ms) {
        this.memberService = ms;
    }

    @GetMapping
    public List<Member> getAllMembers() {
        return memberService.findAllMembers();
    }

    @GetMapping("{email}")
    public Member getMemberByEmail(@RequestParam(value = "email") @Email String email) {
        return memberService.selectMemberByEmail(email);
    }

    @GetMapping("login")
    public Member getLoginuser(HttpServletRequest request) {
        HttpSession session = request.getSession();

        Member member = (Member) session.getAttribute("loginUser");

        return member;
    }

    @PostMapping
    public void addMember(@RequestBody @Valid Member member) {
        memberService.addMember(member);
    }

    @PutMapping
    public void editMember(@RequestBody @Valid Member member) {
        memberService.editMember(member);
    }

    @DeleteMapping
    public void deleteMember(@RequestBody @Valid Member member) {
        memberService.deleteMember(member);
    }
}