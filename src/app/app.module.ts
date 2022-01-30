import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CostOfLivingComponent } from './cost-of-living/cost-of-living.component';
import {HttpClientModule} from '@angular/common/http';
import { TaxCalculatorComponent } from './tax-calculator/tax-calculator.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CostOfLivingComponent,
    TaxCalculatorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
