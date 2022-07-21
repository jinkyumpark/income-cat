package com.jinkyumpark.incomemanagement.income.category;

import com.jinkyumpark.incomemanagement.income.category.main.IncomeMainCategory;
import com.jinkyumpark.incomemanagement.income.category.sub.IncomeSubCategory;
import com.jinkyumpark.incomemanagement.income.category.sub.IncomeSubCategoryService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/v1/category")
public class IncomeCategoryController {

    private final IncomeSubCategoryService incomeSubCategoryService;

    @GetMapping
    public List<IncomeSubCategory> getIncomeSubCategoryByMainCategory(
            @RequestParam("main") IncomeMainCategory incomeMainCategory) {

        return incomeSubCategoryService.getIncomeSubCategoryByMainCategory(incomeMainCategory);
    }

    @PostMapping("sub")
    public void addIncomeSubCategory(@Valid @RequestBody IncomeSubCategory incomeSubCategory) {
        incomeSubCategoryService.addIncomeSubCategory(incomeSubCategory);
    }

}
