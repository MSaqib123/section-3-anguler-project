import { Injectable } from "@angular/core";
import type { InvestmentInput } from "./investment-input.model";

@Injectable({providedIn:"root"})
export class InvestmentService{


    //================= 1. Without Singlal ============
    resultsData? : {
        year: number;
        interest: number;
        valueEndOfYear: number;
        annualInvestment: number;
        totalInterest: number;
        totalAmountInvested: number;
    }[];


    calculateInvestmentResults( data:InvestmentInput)
    {
        const {initialInvestment,duration,expectedReturn,annualInvestment} = data;

        const annualData = [];
        let investmentValue = data.initialInvestment;

        for (let i = 0; i < data.duration; i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (expectedReturn / 100);
            investmentValue += interestEarnedInYear + annualInvestment;
            const totalInterest = investmentValue - annualInvestment * year - initialInvestment;
            annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: initialInvestment + annualInvestment * year,
            });
        }

        this.resultsData = annualData;
    }
    
}