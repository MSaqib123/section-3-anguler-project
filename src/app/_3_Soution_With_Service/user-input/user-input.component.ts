import { Component, EventEmitter, inject, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../../investment-input.model';
import { InvestmentService } from '../../investment.server';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  private investmentService = inject(InvestmentService);

  // constructor(private investmentService:InvestmentService){}
  // calculate = output<InvestmentInput>();

  initialinvestment = signal("0");
  annualinvestment = signal("0");
  expectedreturn = signal("5");
  duration = signal("10");    

  submitForm()
  {
    // this.calculate.emit({
    //    initialInvestment: +this.initialinvestment(),
    //    duration: +this.duration() ,
    //    expectedReturn: +this.expectedreturn(),
    //    annualInvestment: +this.annualinvestment()
    //   })

    this.investmentService.calculateInvestmentResults({
       initialInvestment: +this.initialinvestment(),
       duration: +this.duration() ,
       expectedReturn: +this.expectedreturn(),
       annualInvestment: +this.annualinvestment()
      })

       

      this.initialinvestment.set('0');
      this.annualinvestment.set("0");
      this.expectedreturn.set("5");
      this.duration.set("10");
  }
}
