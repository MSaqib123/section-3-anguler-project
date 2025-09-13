import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-investment-result',
  imports: [],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
  @Input({required:true}) results? :{
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[];

  ngOnChanges(changes: SimpleChanges):void{
    console.log(this.results,"Pakistan");
  }
}
