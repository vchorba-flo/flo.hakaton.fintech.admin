import { Component, Input, OnInit } from '@angular/core';
import { NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'app-category-statistics',
  templateUrl: './category-statistics.component.html',
  styleUrls: ['./category-statistics.component.scss']
})
export class CategoryStatisticsComponent implements OnInit {

  @Input() name: string;
  @Input() totalBankProfit: number;
  @Input() purchasesNumber: number
  @Input() status: NbComponentStatus;

  constructor() { }

  ngOnInit(): void {
  }

}
