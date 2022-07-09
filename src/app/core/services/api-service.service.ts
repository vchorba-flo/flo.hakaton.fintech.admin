import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, shareReplay } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ShopStatistic {
  name: string;
  totalBankProfit: number;
  purchasesNumber: number;
}

export interface GeneralStatistics {
  name: string;
  count: number;
}

export interface User {
  id: string;
  name: string;
  isBlocked: boolean;
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

  public getCategoryStatistics(): Observable<ShopStatistic[]> {
    return of([
      { name: 'Техника', totalBankProfit: 100000, purchasesNumber: 52456 },
      { name: 'Продукты', totalBankProfit: 200000, purchasesNumber: 22456 },
      { name: 'Аптека', totalBankProfit: 300000, purchasesNumber: 32456 },
    ])
    // return this.httpClient.get(`${this.apiUrl}statistics/shop`)
    //   .pipe(
    //     shareReplay(1)
    //   );
  }

  public getGeneralStatistics(): Observable<GeneralStatistics[]> {
    return of([
      { name: 'Прибыль банка', count: 1000 },
      { name: 'Часто покупаемые товары', count: 1000 },
      { name: 'Популярный магазин', count: 1000 },
    ])
    // return this.httpClient.get(`${this.apiUrl}statistics/shop`)
    //   .pipe(
    //     shareReplay(1)
    //   );
  }

  public getUsers(): Observable<User[]> {
    return of([
      {id: '1', name: 'Влад', isBlocked: false},
      {id: '3', name: 'Дима', isBlocked: false},
      {id: '2', name: 'Виталик', isBlocked: false},
      {id: '2', name: 'Виталик', isBlocked: false},
      {id: '2', name: 'Виталик', isBlocked: false},
      {id: '2', name: 'Виталик', isBlocked: false},
      {id: '2', name: 'Виталик', isBlocked: false},
      {id: '2', name: 'Виталик', isBlocked: false},
      {id: '2', name: 'Виталик', isBlocked: false},
      {id: '2', name: 'Виталик', isBlocked: false},
      {id: '2', name: 'Виталик', isBlocked: false},
      {id: '2', name: 'Виталик', isBlocked: false},
      {id: '2', name: 'Виталик', isBlocked: false},
      {id: '2', name: 'Виталик', isBlocked: false},
      {id: '2', name: 'Виталик', isBlocked: false},
      {id: '2', name: 'Виталик', isBlocked: false},
      {id: '2', name: 'Виталик', isBlocked: false},
      {id: '2', name: 'Виталик', isBlocked: false},
      {id: '2', name: 'Виталик', isBlocked: false},
      {id: '2', name: 'Виталик', isBlocked: false},
      {id: '2', name: 'Виталик', isBlocked: false},
      {id: '2', name: 'Виталик', isBlocked: false},
      {id: '2', name: 'Виталик', isBlocked: false},
      {id: '2', name: 'Виталик', isBlocked: false},
      {id: '2', name: 'Виталик', isBlocked: false},
      {id: '2', name: 'Виталик', isBlocked: false},
      {id: '2', name: 'Виталик', isBlocked: false},
      {id: '2', name: 'Виталик', isBlocked: false},
      {id: '2', name: 'Виталик', isBlocked: false},
      {id: '2', name: 'Виталик', isBlocked: false},
      {id: '2', name: 'Виталик', isBlocked: false},
      {id: '2', name: 'Виталик', isBlocked: false},
      {id: '2', name: 'Виталик', isBlocked: false},
      {id: '2', name: 'Виталик', isBlocked: false},
      {id: '2', name: 'Виталик', isBlocked: false},
      {id: '2', name: 'Виталик', isBlocked: false},
      {id: '2', name: 'Виталик', isBlocked: false},
      {id: '2', name: 'Виталик', isBlocked: false},
      {id: '2', name: 'Виталик', isBlocked: false},
      {id: '2', name: 'Виталик', isBlocked: false},
    ])
    // return this.httpClient.get(`${this.apiUrl}statistics/shop`)
    //   .pipe(
    //     shareReplay(1)
    //   );
  }
}
