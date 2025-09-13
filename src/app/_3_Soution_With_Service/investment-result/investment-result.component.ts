import { CurrencyPipe } from '@angular/common';
import {
  Component,
  computed,
  inject,
  input,
  Input,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { InvestmentService } from '../../investment.server';

@Component({
  selector: 'app-investment-result',
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {
  //===================================
  // Without Service
  //===================================
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


  //===================================
  // By Service
  //===================================
  //#region By Service
  private investmentService = inject(InvestmentService);

  //============= Without Singal ==============
  // get results (){
  //    return this.investmentService.resultsData;
  // }

  //============= By Singal ==============
  // results = computed(()=> this.investmentService.resultsData());   // same
  results = this.investmentService.resultsData.asReadonly();          // same

  //#endregion

  

}
