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
                .orElse(null);
    }

    public void insertMember(Member member) {
        mr.save(member);
    }

    @Transactional
    public void editMember(Member editedMember) {
        Member member = mr.findByEmail(editedMember.getEmail())
                .orElseThrow(() -> new IllegalStateException(
                        "수정하려는 유저가 없어요"
                ));

        // TODO : check if editedMember matches loginUser

        if(editedMember.getName() != null) {
            member.setName(editedMember.getName());
        }
    }

    public void deleteMember(Member memberToDelete) {
        Member member = mr.findByEmail(memberToDelete.getEmail())
                .orElseThrow(() -> new IllegalStateException(
                        "회원탈퇴 하려는 유저가 없어요"
                ));

        // TODO : Check if memberToDelete matches loginUser

        mr.deleteById(member.getId());
    }
}
