import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-tax-calculator',
  templateUrl: './tax-calculator.component.html',
  styleUrls: ['./tax-calculator.component.css']
})
export class TaxCalculatorComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  data: Object;
  loading: boolean;
  taxData;
  auth = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBUElfS0VZX01BTkFHRVIiLCJodHRwOi8vdGF4ZWUuaW8vdXNlcl9pZCI6IjVlMGNiMzE1MGM1ZDE5MjkxMWQzNDg1MiIsImh0dHA6Ly90YXhlZS5pby9zY29wZXMiOlsiYXBpIl0sImlhdCI6MTU3Nzg5MDU4MX0.-gjctbfrZpR0Hw3C-CavZNEGAl2-890FJSG5TSml3i0';
  compForm;
  taxeeUrlCalculate2020 = '/api/v2/calculate/2020';
  header = {
    headers: new HttpHeaders()
      .set('Authorization', this.auth)
      .set('Content-Type', 'application/x-www-form-urlencoded')
  };

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) {
    this.compForm = this.formBuilder.group({
      state: '',
      salary: '',
      filing_status: 'single'
    });
  }

  ngOnInit(): void {
  }

  onSubmit(compensationOffer) {
    this.calculateIncomeTax(compensationOffer);
  }

  mapCompToHttpParms(compensationOffer) {
    const httpParams = new HttpParams()
      .append('state', compensationOffer.state)
      .append('pay_rate', compensationOffer.salary)
      .append('filing_status', compensationOffer.filing_status);
    return httpParams;
  }

  calculateIncomeTax(compensationOffer): void {
    const httpParams = this.mapCompToHttpParms(compensationOffer);
    this.loading = true;
    this.http
      .post(this.taxeeUrlCalculate2020, httpParams, this.header)
      .subscribe(taxData => {
        this.taxData = taxData;
        this.loading = false;
      });
  }
}
