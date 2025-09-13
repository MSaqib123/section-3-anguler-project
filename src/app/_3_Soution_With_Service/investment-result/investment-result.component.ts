import { CurrencyPipe } from '@angular/common';
import { Component, inject, input, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { InvestmentService } from '../../investment.server';

@Component({
  selector: 'app-investment-result',
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
  // @Input({required:true}) results? :{
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[];
  // results = input<{
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[]>();

  // ngOnChanges(changes: SimpleChanges):void{
  //   console.log(this.results,"Pakistan");
  // }

  private investmentService = inject(InvestmentService);
  
  get results (){
    return this.investmentService.resultsData;
  }
}
