package com.jinkyumpark.incomemanagement.member;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.HashMap;

@Entity
@Repository
@Data
@NoArgsConstructor
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotBlank(message = "이메일은 아이디로 사용되서 반드시 입력해야 해요")
    @NotNull(message = "이메일은 아이디로 사용되서 반드시 입력해야 해요")
    @Email
    @Column(unique = true)
    private String email;

    private String name;

    public Member(Long id, String email) {
        this.id = id;
        this.email = email;
    }
}