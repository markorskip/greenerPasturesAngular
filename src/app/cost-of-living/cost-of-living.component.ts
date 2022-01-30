import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cost-of-living',
  templateUrl: './cost-of-living.component.html',
  styleUrls: ['./cost-of-living.component.css']
})
export class CostOfLivingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  async getCostOfLiving() {
    //const result1 = <number>await this.resolveAfter2Seconds(20);

  }

}
