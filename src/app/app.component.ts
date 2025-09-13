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
// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { HeaderComponent } from './_2_SolutionByTeacher/header/header.component';
// import { UserInputComponent } from './_2_SolutionByTeacher/user-input/user-input.component';
// import { InvestmentResultComponent } from "./_2_SolutionByTeacher/investment-result/investment-result.component";
// import { InvestmentInput } from './investment-input.model';
// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet, HeaderComponent, UserInputComponent, InvestmentResultComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css',
// })
// export class AppComponent {
//   resultsData? : {
//     year: number;
//     interest: number;
//     valueEndOfYear: number;
//     annualInvestment: number;
//     totalInterest: number;
//     totalAmountInvested: number;
//   }[];

//   calculateInvestmentResults( data:InvestmentInput)
//   {
//     const {initialInvestment,duration,expectedReturn,annualInvestment} = data;

//     const annualData = [];
//     let investmentValue = data.initialInvestment;

//     for (let i = 0; i < data.duration; i++) {
//       const year = i + 1;
//       const interestEarnedInYear = investmentValue * (expectedReturn / 100);
//       investmentValue += interestEarnedInYear + annualInvestment;
//       const totalInterest = investmentValue - annualInvestment * year - initialInvestment;
//       annualData.push({
//         year: year,
//         interest: interestEarnedInYear,
//         valueEndOfYear: investmentValue,
//         annualInvestment: annualInvestment,
//         totalInterest: totalInterest,
//         totalAmountInvested: initialInvestment + annualInvestment * year,
//       });
//     }
//     // console.log(data);
//     // console.log(annualData);
//     // return annualData;
//     this.resultsData = annualData;
//   }
// }

//#endregion



// <!--===================================-->
// <!-- ===== _3_Soution_With_Service ===== -->
// <!--===================================-->
//#region
// import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { HeaderComponent } from './_3_Soution_With_Service/header/header.component';
// import { UserInputComponent } from './_3_Soution_With_Service/user-input/user-input.component';
// import { InvestmentResultComponent } from "./_3_Soution_With_Service/investment-result/investment-result.component";
// import { InvestmentInput } from './investment-input.model';
// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet, HeaderComponent, UserInputComponent, InvestmentResultComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css',
// })
// export class AppComponent {
  
//   // resultsData = signal<{
//   //   year: number;
//   //   interest: number;
//   //   valueEndOfYear: number;
//   //   annualInvestment: number;
//   //   totalInterest: number;
//   //   totalAmountInvested: number;
//   // }[] | undefined>(undefined);


//   // calculateInvestmentResults( data:InvestmentInput)
//   // {
//   //   const {initialInvestment,duration,expectedReturn,annualInvestment} = data;

//   //   const annualData = [];
//   //   let investmentValue = data.initialInvestment;

//   //   for (let i = 0; i < data.duration; i++) {
//   //     const year = i + 1;
//   //     const interestEarnedInYear = investmentValue * (expectedReturn / 100);
//   //     investmentValue += interestEarnedInYear + annualInvestment;
//   //     const totalInterest = investmentValue - annualInvestment * year - initialInvestment;
//   //     annualData.push({
//   //       year: year,
//   //       interest: interestEarnedInYear,
//   //       valueEndOfYear: investmentValue,
//   //       annualInvestment: annualInvestment,
//   //       totalInterest: totalInterest,
//   //       totalAmountInvested: initialInvestment + annualInvestment * year,
//   //     });
//   //   }
//   //   // this.resultsData = annualData;
//   //   this.resultsData.set(annualData);
//   // }
// }

//#endregion



// <!--===================================-->
// <!-- ===== _4_Migrate_to_Modules ===== -->
// <!--===================================-->
//#region
import { Component, signal } from '@angular/core';

@Component({
  standalone:false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  
}

//#endregion