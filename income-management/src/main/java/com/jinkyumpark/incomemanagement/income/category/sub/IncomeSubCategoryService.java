package com.jinkyumpark.incomemanagement.income.category.sub;

import com.jinkyumpark.incomemanagement.income.category.main.IncomeMainCategory;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class IncomeSubCategoryService {

    private final IncomeSubCategoryRepository incomeSubCategoryRepository;

    public List<IncomeSubCategory> getIncomeSubCategoryByMainCategory(IncomeMainCategory incomeMainCategory) {
        return incomeSubCategoryRepository.findAllByIncomeMainCategory(incomeMainCategory);
    }

    public void addIncomeSubCategory(IncomeSubCategory incomeSubCategory) {
        Optional<IncomeSubCategory> incomeSubCategoryOptional =
                incomeSubCategoryRepository.findByName(incomeSubCategory.getName());

        if(incomeSubCategoryOptional.isPresent()) {
            if(incomeSubCategoryOptional.get().getIncomeMainCategory().equals(incomeSubCategory.getIncomeMainCategory())) {
                throw new IllegalStateException("Duplicate Income Sub Category Found");
            }
        }

        incomeSubCategoryRepository.save(incomeSubCategory);
    }
}
