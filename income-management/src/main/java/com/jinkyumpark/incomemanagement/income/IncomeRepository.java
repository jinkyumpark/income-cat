package com.jinkyumpark.incomemanagement.income;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IncomeRepository extends JpaRepository<Income, Long> {
    List<Income> getIncomeById(Long id);
}
