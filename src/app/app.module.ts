import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { InvestmentResultComponent } from "./_4_Migrate_to_Modules/investment-result/investment-result.component";
import { UserInputComponent } from "./_4_Migrate_to_Modules/user-input/user-input.component";
import { HeaderComponent } from "./_4_Migrate_to_Modules/header/header.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations:[AppComponent,HeaderComponent, UserInputComponent, InvestmentResultComponent],  //component , features
    imports:[BrowserModule,FormsModule,CommonModule],
    bootstrap:[AppComponent]
})



export class AppModule{

}