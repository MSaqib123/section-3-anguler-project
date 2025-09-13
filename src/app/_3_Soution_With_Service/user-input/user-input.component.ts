import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../../investment-input.model';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  //@Output() calculate = new EventEmitter<InvestmentInput>();
  calculate = output<InvestmentInput>();

  initialinvestment = signal("0");
  annualinvestment = signal("0");
  expectedreturn = signal("5");
  duration = signal("10");    

  submitForm()
  {
    this.calculate.emit({
       initialInvestment: +this.initialinvestment(),
       duration: +this.duration() ,
       expectedReturn: +this.expectedreturn(),
       annualInvestment: +this.annualinvestment()})


      this.initialinvestment.set('0');
      this.annualinvestment.set("0");
      this.expectedreturn.set("5");
      this.duration.set("10");
  }
}
