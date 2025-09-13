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
  standalone:false,
  selector: 'app-investment-result',
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {
  private investmentService = inject(InvestmentService);

  results = computed(()=> this.investmentService.resultsData()); 

  

}
