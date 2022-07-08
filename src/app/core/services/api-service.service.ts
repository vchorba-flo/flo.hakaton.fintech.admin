import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, shareReplay } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ShopStatistic {
  name: string;
  totalBankProfit: number;
  purchasesNumber: number;
}

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  public getShopsStatistics(): Observable<ShopStatistic[]> {
    return of([
      { name: 'Магнит', totalBankProfit: 100000, purchasesNumber: 52456 },
      { name: 'Пятёрочка', totalBankProfit: 200000, purchasesNumber: 22456 },
      { name: 'Перекрёсток', totalBankProfit: 300000, purchasesNumber: 32456 },
    ])
    // return this.httpClient.get(`${this.apiUrl}statistics/shop`)
    //   .pipe(
    //     shareReplay(1)
    //   );
  }
}
