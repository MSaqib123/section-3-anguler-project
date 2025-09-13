import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { InvCalculatorComponent } from "./inv-calculator/inv-calculator.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, InvCalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'section-3-anguler-project';
}
