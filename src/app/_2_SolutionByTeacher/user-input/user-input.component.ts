import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialinvestment = "0";
  annualinvestment = "0";
  expectedreturn = "5";
  duration = "10";    

  submitForm()
  {
    console.log(this.initialinvestment);
    console.log(this.annualinvestment);
    console.log(this.expectedreturn);
    console.log(this.duration);
  }
}
