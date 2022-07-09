import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { ApiServiceService, ShopsWithCashBack } from "../core/services/api-service.service";
import { ShopSortFields } from "../shared/pipes/sort-shop-by-cash-back.pipe";

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent implements OnInit {
  shopSortField: ShopSortFields = 'shopName';
  shopsWithCashBack$: Observable<ShopsWithCashBack[]>;
  shopSearch: string;

  constructor(private apiService: ApiServiceService) {
  }

  ngOnInit(): void {
    this.shopsWithCashBack$ = this.apiService.getShopsWithCashBack();
  }

  setShopSortField(sortField: ShopSortFields){
    this.shopSortField = sortField;
  }
}
