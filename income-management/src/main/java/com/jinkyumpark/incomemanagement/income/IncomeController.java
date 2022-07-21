package com.jinkyumpark.incomemanagement.income;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.sql.Timestamp;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/v1/income")
public class IncomeController {

    @Autowired
    IncomeService incomeService;

    @GetMapping
    public List<Income> getIncomeList(@RequestBody IncomeRequest incomeRequest,
                                      @PageableDefault(size = 10) Pageable page) {
        Long id = 1L;
        return incomeService.getIncomeList(id, incomeRequest.getStartDate(), incomeRequest.getEndDate(), page);
    }

    @GetMapping("/total/{id}")
    public Map<String, Double> getIncomeSummary(@PathVariable("id") Long id,
                                                @RequestParam(value = "startDate", required = false) Timestamp startDate,
                                                @RequestParam(value = "endDate", required = false) Timestamp endDate) {
//        defaultValue = String.valueOf(Timestamp.valueOf(LocalDateTime.now().minusDays(30)))
//        defaultValue = LocalDateTime.now()

//        Double mainIncomeSum = incomeService.getIncomeSum(id, IncomeMainCategory.MAIN, startDate, endDate);
//        Double parttimeIncomeSum = incomeService.getIncomeSum(id, IncomeMainCategory.PARTTIME, startDate, endDate);
//        Double governmentIncomeSum = incomeService.getIncomeSum(id, IncomeMainCategory.GOVERNMENT, startDate, endDate);
//        Double dividendIncomeSum = incomeService.getIncomeSum(id, IncomeMainCategory.DIVIDEND, startDate, endDate);
//        Double capitalIncomeSum = incomeService.getIncomeSum(id, IncomeMainCategory.CAPITAL, startDate, endDate);
//
//        Map<String, Double> incomeSum = new HashMap<>();
//        incomeSum.put("mainIncome", mainIncomeSum);
//        incomeSum.put("parttimeIncome", parttimeIncomeSum);
//        incomeSum.put("dividendIncome", dividendIncomeSum);
//        incomeSum.put("governmentIncome", governmentIncomeSum);
//        incomeSum.put("capitalIncome", capitalIncomeSum);
//
//        return incomeSum;

        return null;
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