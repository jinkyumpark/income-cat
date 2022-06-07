package com.jinkyumpark.incomemanagement.member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;

@Service
public class MemberService {
    private final MemberRepository mr;

    @Autowired
    public MemberService(MemberRepository mr) {
        this.mr = mr;
    }

    public Member selectMemberByEmail(String email) {
        return mr.findByEmail(email)
                .orElseThrow(() -> new IllegalStateException(
                        "이 이메일로 가입된 유저가 없어요"
                ));
    }

    public void insertMember(Member member) {
        mr.save(member);
    }

    public void login(Member member, HttpServletRequest request) {
        Member loginUser = mr.findByEmail(member.getEmail())
                .orElseThrow(() -> new IllegalStateException(
                        "없는 아이디에요. 회원가입 해 주세요"
                ));

        if(!loginUser.getPw().equals(member.getPw())) {
            throw new IllegalStateException("비밀번호가 틀렸어요. 다시 시도해 주세요");
        }

        request.getSession().setAttribute("loginUser", loginUser);
    }

    @Transactional
    public void editMember(Member editedMember) {
        Member member = mr.findByEmail(editedMember.getEmail())
                .orElseThrow(() -> new IllegalStateException(
                        "수정하려는 유저가 없어요"
                ));

        // TODO : check if editedMember matches loginUser

        if(editedMember.getPw() != null) {
            member.setPw(editedMember.getPw());
        }

        if(editedMember.getName() != null) {
            member.setName(editedMember.getName());
        }
    }

    public void deleteMember(Member memberToDelete) {
        Member member = mr.findByEmail(memberToDelete.getEmail())
                .orElseThrow(() -> new IllegalStateException(
                        "회원탈퇴 하려는 유저가 없어요"
                ));

        if(!memberToDelete.getPw().equals(member.getPw())) {
            throw new IllegalStateException("비밀번호를 다시 확인해 주세요");
        }

        // TODO : Check if memberToDelete matches loginUser

        mr.deleteById(member.getId());
    }
}
