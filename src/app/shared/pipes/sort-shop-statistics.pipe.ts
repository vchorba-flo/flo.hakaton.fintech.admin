import { Pipe, PipeTransform } from '@angular/core';
import { ShopStatistic } from '../../core/services/api-service.service';

@Pipe({
  name: 'sortShopStatistics'
})
export class SortShopStatisticsPipe implements PipeTransform {

  transform(value: ShopStatistic[] | null, sortField: keyof ShopStatistic): ShopStatistic[] {
    if (!value) {
      return [];
    }

    if (sortField === 'name') {
      return value.sort((a, b) => {
        return a[sortField].localeCompare(b[sortField]);
      })
    }

    if (sortField === 'totalBankProfit') {
      return value.sort((a, b) => {
        return b[sortField] - a[sortField];
      })
    }

    if (sortField === 'purchasesNumber') {
      return value.sort((a, b) => {
        return b[sortField] - a[sortField];
      })
    }
    return value;
  }

}
