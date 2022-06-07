package com.jinkyumpark.incomemanagement.member;

import lombok.Data;
import lombok.Generated;
import org.springframework.stereotype.Repository;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
@Repository
@Data
public class Member {
    @Id
    @Generated
    private Long id;

    @NotBlank(message = "이메일은 아이디로 사용되서 반드시 입력해야 해요")
    @NotNull
    @Email
    @Column(unique = true)
    private String email;

    @NotBlank(message = "비밀번호는 반드시 입력해야 해요")
    @NotNull
    private String pw;

    private String name;
}