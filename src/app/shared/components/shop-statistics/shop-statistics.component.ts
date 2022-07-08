import { Component, Input, OnInit } from '@angular/core';
import { NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'app-shop-statistics',
  templateUrl: './shop-statistics.component.html',
  styleUrls: ['./shop-statistics.component.scss']
})
export class ShopStatisticsComponent implements OnInit {

  @Input() name: string;
  @Input() totalBankProfit: number;
  @Input() purchasesNumber: number
  @Input() status: NbComponentStatus;

  constructor() { }

  ngOnInit(): void {
  }

}
