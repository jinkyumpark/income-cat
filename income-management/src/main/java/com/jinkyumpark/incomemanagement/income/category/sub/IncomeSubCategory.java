package com.jinkyumpark.incomemanagement.income.category.sub;

import com.jinkyumpark.incomemanagement.income.category.main.IncomeMainCategory;
import lombok.Data;
import org.springframework.stereotype.Repository;

import javax.persistence.*;

@Entity
@Repository
@Data
public class IncomeSubCategory {
    @Id
    @SequenceGenerator(
            name = "income_sub_category_sequence",
            sequenceName = "income_sub_category_sequence",
            allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "income_sub_category_sequence")
    private Long id;

    private IncomeMainCategory incomeMainCategory;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String displayName;

    private String image;
}