
// <!--===================================-->
// <!-- ===== _1_TaskByMe ===== -->
// <!--===================================-->
//#region 
// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { HeaderComponent } from "./_1_TaskByMe/header/header.component";
// import { InvCalculatorComponent } from "./_1_TaskByMe/inv-calculator/inv-calculator.component";
// import { ResultTableComponent } from "./_1_TaskByMe/result-table/result-table.component";

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet, HeaderComponent, InvCalculatorComponent, ResultTableComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'section-3-anguler-project';
//   invData : any = [];
//   getdata(obj:any){
//     this.invData = obj;
//   }
// }

//#endregion



// <!--===================================-->
// <!-- ===== _2_SolutionByTeacher ===== -->
// <!--===================================-->
//#region 

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./_2_SolutionByTeacher/header/header.component";
import { UserInputComponent } from "./_2_SolutionByTeacher/user-input/user-input.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'section-3-anguler-project';
  invData : any = [];
  getdata(obj:any){
    this.invData = obj;
  }
}

//#endregion