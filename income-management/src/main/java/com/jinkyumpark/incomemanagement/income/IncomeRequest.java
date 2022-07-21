package com.jinkyumpark.incomemanagement.income;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class IncomeRequest {
    private Timestamp startDate;
    private Timestamp endDate;
}
