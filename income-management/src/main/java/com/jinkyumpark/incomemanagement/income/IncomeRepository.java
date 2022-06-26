package com.jinkyumpark.incomemanagement.income;

import org.springframework.data.jpa.repository.JpaRepository;

import java.sql.Timestamp;
import java.util.List;

public interface IncomeRepository extends JpaRepository<Income, Long> {
    List<Income> getIncomeById(Long id);

    List<Income> findIncomeByIdAndType(Long id, Income.IncomeType incomeType);
//    List<Income> findIncomeByIdAndIncomeTypeBetweenDepositeDate(Long id, Income.IncomeType incomeType, Timestamp startDate, Timestamp endDate);
}
