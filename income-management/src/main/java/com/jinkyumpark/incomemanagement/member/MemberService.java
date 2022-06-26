package com.jinkyumpark.incomemanagement.member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class MemberService {
    private final MemberRepository memberRepository;

    @Autowired
    public MemberService(MemberRepository mr) {
        this.memberRepository = mr;
    }

    public Member selectMemberByEmail(String email) {
        return memberRepository.findByEmail(email)
                .orElse(null);
    }

    public void insertMember(Member member) {
        memberRepository.save(member);
    }

    @Transactional
    public void editMember(Member editedMember) {
        Member member = memberRepository.findByEmail(editedMember.getEmail())
                .orElseThrow(() -> new IllegalStateException(
                        "수정하려는 유저가 없어요"
                ));

        // TODO : check if editedMember matches loginUser

        if(editedMember.getName() != null) {
            member.setName(editedMember.getName());
        }
    }

    public void deleteMember(Member memberToDelete) {
        Member member = memberRepository.findByEmail(memberToDelete.getEmail())
                .orElseThrow(() -> new IllegalStateException(
                        "회원탈퇴 하려는 유저가 없어요"
                ));

        // TODO : Check if memberToDelete matches loginUser

        memberRepository.deleteById(member.getId());
    }

    public List<Member> findAllMembers() {
        return (List<Member>) memberRepository.findAll();
    }
}
