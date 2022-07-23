package com.jinkyumpark.incomemanagement.income;

import com.jinkyumpark.incomemanagement.income.category.main.IncomeMainCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.sql.Timestamp;
import java.util.HashMap;
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

    @GetMapping("total")
    public Map<String, Double> getIncomeSummary(@RequestBody IncomeRequest incomeRequest) {

        Long id = 1L;

        Double mainIncomeSum = incomeService.getIncomeSum(id, IncomeMainCategory.MAIN, incomeRequest.getStartDate(), incomeRequest.getEndDate());
        Double parttimeIncomeSum = incomeService.getIncomeSum(id, IncomeMainCategory.PARTTIME, incomeRequest.getStartDate(), incomeRequest.getEndDate());
        Double governmentIncomeSum = incomeService.getIncomeSum(id, IncomeMainCategory.GOVERNMENT, incomeRequest.getStartDate(), incomeRequest.getEndDate());
        Double dividendIncomeSum = incomeService.getIncomeSum(id, IncomeMainCategory.DIVIDEND, incomeRequest.getStartDate(), incomeRequest.getEndDate());
        Double capitalIncomeSum = incomeService.getIncomeSum(id, IncomeMainCategory.CAPITAL, incomeRequest.getStartDate(), incomeRequest.getEndDate());

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

    @PutMapping
    public void editIncome(@RequestBody @Valid Income editedIncome) {
        incomeService.editIncome(editedIncome);
    }

    @DeleteMapping("{id}")
    public void deleteIncomeById(@RequestParam("id") Long id) {
        incomeService.deleteIncome(id);
    }
}