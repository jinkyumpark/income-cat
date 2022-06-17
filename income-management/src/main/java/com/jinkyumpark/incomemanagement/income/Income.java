package com.jinkyumpark.incomemanagement.income;

import com.jinkyumpark.incomemanagement.member.Member;
import lombok.*;
import org.springframework.stereotype.Repository;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Currency;

@Entity
@Repository
@Data
public class Income {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name = "member")
    private Member memberId;

    enum IncomeType {
        MAIN,
        PARTTIME,
        GOVERNMENT,
        DIVIDEND,
        CAPITAL
    }
    private IncomeType type;

    private Integer amount;

    private Currency currency;

    private Timestamp depositeDate;
}