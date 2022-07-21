package com.jinkyumpark.incomemanagement.member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import javax.validation.constraints.Email;
import java.util.*;

@RestController
@RequestMapping("/v1/member")
@CrossOrigin("*")
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

    @GetMapping("welcome")
    public HashMap<String, String> welcomeUser() {
        HashMap<String, String> welcome = new HashMap<>();

        String userid = "jinkpark";
        String name = "박진겸";
        String message = "반가워요, " + name + "님!";

        String messageByTime = "";
        int currentHour = Calendar.getInstance().get(Calendar.HOUR_OF_DAY);
        if(currentHour > 0 && currentHour < 5) {
            messageByTime = "새벽까지 고생하시네요. " + name + "님이 원하는 바를 꼭 이룰 수 있을거에요";
        } else if(currentHour >= 5 && currentHour < 8) {
            messageByTime = "일찍 일어나는 새가 벌래를 잡는 법! 오늘도 열심히 달려봐요";
        } else if(currentHour >= 8 && currentHour < 12) {
            messageByTime = "맛있는 점심 먹을걸 생각하며 힘내봐요!";
        } else if(currentHour >= 12 && currentHour < 18) {
            messageByTime = "졸린 오후 잘 버텨봐요";
        } else if(currentHour >= 18 && currentHour < 21) {
            messageByTime = "부업도 좋지만, 가끔은 휴식도 필요해요. 늦은밤 화이팅 하세요!";
        } else {
            messageByTime = "하루를 잘 정리하며 마무리 하고 계시나요? 오늘 수입이 있으시다면 추가하는거 잊지 마세요!";
        }

        welcome.put("userid", userid);
        welcome.put("name", name);
        welcome.put("message", message + " " + messageByTime);

        return welcome;
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