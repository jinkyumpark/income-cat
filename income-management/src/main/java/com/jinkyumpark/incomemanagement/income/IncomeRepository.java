package com.jinkyumpark.incomemanagement.income;

import com.jinkyumpark.incomemanagement.income.category.main.IncomeMainCategory;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.sql.Timestamp;
import java.util.List;

public interface IncomeRepository extends JpaRepository<Income, Long> {
    List<Income> getIncomeById(Long id, Timestamp startDate, Timestamp endDate, Pageable page);

    List<Income> findAllIncomeByIdAndDepositeDateIsBetween(Long id, Timestamp startDate, Timestamp endDate, Pageable page);

    List<Income> findIncomeByIdAndMainCategory(Long id, IncomeMainCategory incomeType);
//    List<Income> findIncomeByIdAndIncomeTypeBetweenDepositeDate(Long id, Income.IncomeType incomeType, Timestamp startDate, Timestamp endDate);
}
