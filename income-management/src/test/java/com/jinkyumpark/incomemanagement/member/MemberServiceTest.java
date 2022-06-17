package com.jinkyumpark.incomemanagement.member;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

public class MemberServiceTest {
    @Mock
    private MemberRepository memberRepository;

    @Captor
    private ArgumentCaptor<Member> memberArgumentCaptor;

    private MemberService underTest;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        underTest = new MemberService(memberRepository);
    }

    @Test
    void itShouldSelectMemberByEmail() {
        // Given
        String email = "test@example.com";
        String pw = "testpassword";
        Member member = new Member(email, pw);

        // When

        // Then
    }

    @Test
    void isShouldThrowWhenMemberIsNull() {
        // Given

        // When

        // Then
    }



}
