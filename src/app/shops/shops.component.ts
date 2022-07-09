import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent implements OnInit {
  mockShops = [
    {shopName: 'Магнит', cashBack: {shop:8, bank:5, user:3 } },
    {shopName: 'Перекресток', cashBack: {shop:4, bank:2, user:2 } },
    {shopName: 'Пятюна', cashBack: {shop:5, bank:2, user:3 } },
    {shopName: 'Ведьмачье дело', cashBack: {shop:10, bank:3, user:7 } },
    {shopName: 'Барбер шоп', cashBack: {shop:3, bank:2, user:1 } },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
