package com.jinkyumpark.incomemanagement.income;

import com.jinkyumpark.incomemanagement.income.category.main.IncomeMainCategory;
import com.jinkyumpark.incomemanagement.income.category.sub.IncomeSubCategory;
import com.jinkyumpark.incomemanagement.member.Member;
import lombok.*;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Currency;

@Data
@Entity(name = "income")
@Table(name = "income")
public class Income {
    @Id
    @SequenceGenerator(
            name = "income_sequence",
            sequenceName = "income_sequence",
            allocationSize = 1)
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "income_sequence")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "member", foreignKey = @ForeignKey(name = "income_member_fk"))
    private Member member;

    private IncomeMainCategory mainCategory;

    @ManyToOne
    @JoinColumn(name = "income_sub_category_id",
            referencedColumnName = "id",
            foreignKey = @ForeignKey(name = "income_sub_category_fk"))
    private IncomeSubCategory subCategory;

    private String description;

    private Double amount;
    private Currency currency;

    private Timestamp depositeDate = new Timestamp(System.currentTimeMillis());
}