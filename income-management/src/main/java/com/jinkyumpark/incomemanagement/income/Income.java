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
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(
            name = "member_id",
            foreignKey = @ForeignKey(name = "income_member_fk")
    )
    private Member member;

    public enum IncomeType {
        MAIN,
        PARTTIME,
        GOVERNMENT,
        DIVIDEND,
        CAPITAL
    }
    private IncomeType type;

    private Double amount;

    private Currency currency;

    private Timestamp depositeDate = new Timestamp(System.currentTimeMillis());
}
