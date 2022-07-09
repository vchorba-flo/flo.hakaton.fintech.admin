import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiServiceService, ShopStatistic } from '../core/services/api-service.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  shopStatistics$: Observable<ShopStatistic[]>;
  categoryStatistics$: Observable<ShopStatistic[]>;

  shopSortField: keyof ShopStatistic = 'name';
  categorySortField: keyof ShopStatistic = 'name';

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.shopStatistics$ = this.apiService.getShopsStatistics();
    this.categoryStatistics$ = this.apiService.getCategoryStatistics();
  }

  setShopSortField(sortField: keyof ShopStatistic): void {
    this.shopSortField = sortField;
  }

  setCategorySortField(sortField: keyof ShopStatistic): void {
    this.categorySortField = sortField;
  }
}
