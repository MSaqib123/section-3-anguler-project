import { Component, EventEmitter, Output } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-inv-calculator',
  imports: [FormsModule],
  templateUrl: './inv-calculator.component.html',
  styleUrl: './inv-calculator.component.css'
})
export class InvCalculatorComponent {
  @Output() invData = new EventEmitter<[{
    year: string;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }]>();

  initalInvestment:string="";
  anualInvestment:string="";
  expectedReturnInvestment:string="";
  duration:string="";
  annualData:any = [];


  calculateInvestmentResults() {
    let investmentValue = Number(this.initalInvestment);

    for (let i = 0; i < Number(this.duration); i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (Number(this.expectedReturnInvestment) / 100);
      investmentValue += interestEarnedInYear + Number(this.anualInvestment);
      const totalInterest =
        investmentValue - Number(this.anualInvestment) * year - Number(this.initalInvestment);
      this.annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment:  Number(this.anualInvestment) ,
        totalInterest: totalInterest,
        totalAmountInvested: Number(this.initalInvestment) + Number(this.anualInvestment) * year,
      });
    }
    // ======= Note working of function =========
    // Yeh function ek investment ka hisaab lagata hai ke agar aap koi paisa invest karen
    // (initial investment), har saal kuch extra paisa daalen (annual investment), aur ek fixed return rate 
    // (expected return) mile, toh kitne saalon (duration) baad aap ka investment kitna barh jayega. Yeh har saal ke liye ek object banata hai, 
    // jismein details hoti hain jaise year, interest, valueEndOfYear, annualInvestment, totalInterest, aur totalAmountInvested. Yeh data wahi hai 
    // jo aap ne apne Angular component mein JSON ke tor par dikhaya.

    return this.annualData;
  }

  formsubmit(){
    this.calculateInvestmentResults();
    this.invData.emit(this.annualData);
  }

}
