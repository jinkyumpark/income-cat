//package com.jinkyumpark.incomemanagement.member;
//
//import org.junit.jupiter.api.DisplayName;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
//
//import java.util.Optional;
//
//import static org.assertj.core.api.Assertions.assertThat;
//
//@DataJpaTest(
//        properties = {
//                "spring.jpa.properties.javax.persistence.validation.mode=none"
//        }
//)
//public class MemberRepositoryTest {
//    @Autowired
//    private MemberRepository underTest;
//
//    @Test
//    @DisplayName("Select Member By Email")
//    void itShouldSelectMemberByEmail() {
//        // Given
//        String email = "test@example.com";
//        String pw = "testpassword";
//        Member expected = new Member(email, pw);
//
//        // When
//        underTest.save(expected);
//        Optional<Member> result = underTest.findByEmail(email);
//
//        // Then
//        assertThat(result)
//                .isPresent()
//                .hasValueSatisfying(c -> {
//                    assertThat(c).isEqualTo(expected);
//                });
//    }
//
//    @Test
//    @DisplayName("Return null when there is no member")
//    void itShouldNotSelectWhenThereIsNoMember() {
//        // Given
//        String email = "test@example.com";
//
//        // When
//        Optional<Member> result = underTest.findByEmail(email);
//
//        // Then
//        assertThat(result)
//                .isEmpty();
//    }
//}
