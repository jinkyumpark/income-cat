package com.jinkyumpark.incomemanagement.income;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.awt.print.Pageable;
import java.util.List;

@Service
public class IncomeService {

    @Autowired
    IncomeRepository incomeRepository;

    private final String EDIT_ERROR_MESSAGE = "수정하실려는 수입이 없어요";
    private final String DELETE_ERROR_MESSAGE = "수입을 지울 수 없었어요";

    public List<Income> getIncomeList() {
        Long id = 1L;
        return incomeRepository.getIncomeById(id);
    }

    public void addIncome(Income income) {
        incomeRepository.save(income);
    }

    @Transactional
    public void editIncome(Income editedIncome) {
        Income income = incomeRepository.findById(editedIncome.getId())
                .orElseThrow(() -> new IllegalStateException(
                        EDIT_ERROR_MESSAGE
                ));

        if(editedIncome.getAmount() != null) {
            income.setAmount(editedIncome.getAmount());
        }

        if(editedIncome.getCurrency() != null) {
            income.setCurrency(editedIncome.getCurrency());
        }

        if(editedIncome.getType() != null) {
            income.setType(editedIncome.getType());
        }

        if(editedIncome.getDepositeDate() != null) {
            income.setDepositeDate(editedIncome.getDepositeDate());
        }
    }

    public void deleteIncome(Long id) {
        // TODO : check if loginUser matches

        incomeRepository.deleteById(id);
    }
}
