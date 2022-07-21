package com.jinkyumpark.incomemanagement.income.category.sub;

import com.jinkyumpark.incomemanagement.income.category.main.IncomeMainCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface IncomeSubCategoryRepository extends JpaRepository<IncomeSubCategory, Long> {
    List<IncomeSubCategory> findAllByIncomeMainCategory(IncomeMainCategory incomeMainCategory);
    Optional<IncomeSubCategory> findByName(String name);
}
