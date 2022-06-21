package com.jinkyumpark.incomemanagement.income;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.awt.print.Pageable;
import java.util.List;

@RestController
@RequestMapping("/v1/income")
public class IncomeController {

    @Autowired
    IncomeService incomeService;

    @GetMapping
    public List<Income> getIncomeList() {
        return incomeService.getIncomeList();
    }

    @PostMapping
    public void addIncome(@RequestBody @Valid Income income) {
        incomeService.addIncome(income);
    }

    @PutMapping
    public void editIncome(@RequestBody @Valid Income editedIncome) {
        incomeService.editIncome(editedIncome);
    }

    @DeleteMapping("{id}")
    public void deleteIncomeById(@RequestParam("id") Long id) {
        incomeService.deleteIncome(id);
    }
}