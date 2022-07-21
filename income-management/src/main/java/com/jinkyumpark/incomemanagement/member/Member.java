package com.jinkyumpark.incomemanagement.member;

import com.jinkyumpark.incomemanagement.income.Income;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Data
@NoArgsConstructor

@Entity(name = "member")
@Table(
        name = "member",
        uniqueConstraints = {
            @UniqueConstraint(
                    name = "member_email_unique",
                    columnNames = "email")}
)
public class Member {
    @Id
    @SequenceGenerator(
            name = "member_sequence",
            sequenceName = "member_sequence",
            allocationSize = 1)
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "member_sequence")
    private Long id;

    @Email
    @Column(unique = true, nullable = false)
    private String email;

    private String name;

    @OneToMany(
            cascade = {CascadeType.PERSIST, CascadeType.REMOVE},
            mappedBy = "member"
    )
    private List<Income> incomeList = new ArrayList<>();

    public Member(Long id, String email) {
        this.id = id;
        this.email = email;
    }
}