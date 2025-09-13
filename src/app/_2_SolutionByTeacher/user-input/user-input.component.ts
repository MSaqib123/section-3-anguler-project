import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<{initialInvestment: number; duration: number; expectedReturn: number;annualInvestment: number}>();

  initialinvestment = "0";
  annualinvestment = "0";
  expectedreturn = "5";
  duration = "10";    

  submitForm()
  {
    this.calculate.emit({
       initialInvestment: +this.initialinvestment,
       duration: +this.duration ,
       expectedReturn: +this.expectedreturn,
       annualInvestment: +this.annualinvestment})
  }
}
