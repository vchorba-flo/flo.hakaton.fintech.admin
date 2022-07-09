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

export interface CashBackTypes {
  shop: number;
  bank: number;
  user: number;
}

export interface ShopsWithCashBack {
  shopName: string;
  cashBack: CashBackTypes;
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

  public getGeneralStatistics(range?: any): Observable<GeneralStatistics[]> {
    return of([
      { name: 'Прибыль банка', count: 1000 },
      { name: 'Частые Категории', count: 1000 },
      { name: 'Популярные магазин', count: 1000 },
    ])
    // return this.httpClient.get<GeneralStatistics[]>(`${this.apiUrl}statistics/general`, {
    //   params: {
    //     rangeStart: range?.start?.getTime(),
    //     rangeEnd: range?.end?.getTime(),
    //   }
    // })
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

  public userBlockAction(user: User): void {
    user.isBlocked = !user.isBlocked;
  }

  public getShopsWithCashBack(): Observable<ShopsWithCashBack[]> {
     return of([
      { shopName: 'Магнит', cashBack: {shop:8, bank:5, user:3 } },
      { shopName: 'Перекресток', cashBack: {shop:4, bank:2, user:2 } },
      { shopName: 'Три топора', cashBack: {shop:4, bank:2, user:2 } },
      { shopName: 'Paypal', cashBack: {shop:5, bank:3, user:2 } },
      { shopName: 'Дисней', cashBack: {shop:4, bank:3, user:1 } },
      { shopName: 'SpaceX', cashBack: {shop:8, bank:1, user:7 } },
      { shopName: 'Tesla shop', cashBack: {shop:7, bank:2, user:5 } },
      { shopName: 'ivi', cashBack: {shop:4, bank:2, user:2 } },
      { shopName: 'www.123.com', cashBack: {shop:4, bank:2, user:2 } },
      { shopName: 'плиз купи', cashBack: {shop:25, bank:15, user:5 } },
      { shopName: 'Steam', cashBack: {shop:30, bank:15, user:15 } },
      { shopName: 'Пятёрка', cashBack: {shop:5, bank:2, user:3 } },
      { shopName: 'Макароны', cashBack: {shop:10, bank:3, user:7 } },
      { shopName: 'Барбер шоп', cashBack: {shop:3, bank:2, user:1 } },
    ])
  }
}
