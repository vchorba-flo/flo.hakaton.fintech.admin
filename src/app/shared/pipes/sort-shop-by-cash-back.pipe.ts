import { Pipe, PipeTransform } from '@angular/core';
import { ShopsWithCashBack } from "../../core/services/api-service.service";

export type ShopSortFields = 'shop' | 'bank' | 'user' | 'shopName'

@Pipe({
  name: 'sortShopByCashBack'
})
export class SortShopByCashBackPipe implements PipeTransform {

  transform(value: ShopsWithCashBack[], sortField: ShopSortFields): ShopsWithCashBack[] {
    if (!value) {
      return []
    }

    if (sortField === "shopName") {
      value.sort((a, b) => a[sortField].localeCompare(b[sortField]))
    } else {
      value.sort((a, b) => b.cashBack[sortField] - a.cashBack[sortField])
    }

    return value
  }

}
