package com.jinkyumpark.incomemanagement.income;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.awt.print.Pageable;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/v1/income")
public class IncomeController {

    @Autowired
    IncomeService incomeService;

    @GetMapping
    public List<Income> getIncomeList() {
        return incomeService.getIncomeList();
    }

    @GetMapping("/summary/{id}")
    public Map<String, Double> getIncomeSummary(@PathVariable("id") Long id,
                                                @RequestParam(value = "startDate", required = false) Timestamp startDate,
                                                @RequestParam(value = "endDate", required = false) Timestamp endDate) {
//        defaultValue = String.valueOf(Timestamp.valueOf(LocalDateTime.now().minusDays(30)))
//        defaultValue = LocalDateTime.now()

        Double mainIncomeSum = incomeService.getIncomeSum(id, Income.IncomeType.MAIN, startDate, endDate);
        Double parttimeIncomeSum = incomeService.getIncomeSum(id, Income.IncomeType.PARTTIME, startDate, endDate);
        Double governmentIncomeSum = incomeService.getIncomeSum(id, Income.IncomeType.GOVERNMENT, startDate, endDate);
        Double dividendIncomeSum = incomeService.getIncomeSum(id, Income.IncomeType.DIVIDEND, startDate, endDate);
        Double capitalIncomeSum = incomeService.getIncomeSum(id, Income.IncomeType.CAPITAL, startDate, endDate);

        Map<String, Double> incomeSum = new HashMap<>();
        incomeSum.put("mainIncome", mainIncomeSum);
        incomeSum.put("parttimeIncome", parttimeIncomeSum);
        incomeSum.put("dividendIncome", dividendIncomeSum);
        incomeSum.put("governmentIncome", governmentIncomeSum);
        incomeSum.put("capitalIncome", capitalIncomeSum);

        return incomeSum;
    }

    @PostMapping
    public void addIncome(@RequestBody @Valid Income income) {
        incomeService.addIncome(income);
    }

    @RequestMapping("category/sub")
    @PostMapping
    public void addIncomeSubCategory(@RequestBody @Valid IncomeSubCategory subCategory) {
        incomeService.addIncomeSubCategory(subCategory);
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