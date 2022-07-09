import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NbComponentStatus} from "@nebular/theme/components/component-status";

type CashBackTypes = 'userCashBack' | 'bankCashBack' | 'shopCashBack'

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss']
})
export class ShopCardComponent implements OnInit {
  @Input() status: NbComponentStatus;
  @Input() shopName: string;
  @Input() userCashBack: number;
  @Input() bankCashBack: number;
  @Input() shopCashBack: number;

  @Output() action: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  increment(type: CashBackTypes) {
    switch (type) {
      case "userCashBack":
        this.userCashBack += 1;
        this.bankCashBack -= 1;
        break;
      case "bankCashBack":
        this.bankCashBack += 1;
        this.userCashBack -= 1;
        break;
      case "shopCashBack":
        this.shopCashBack += 1;
        this.bankCashBack += 1;
    }
  }

  decrement(type: CashBackTypes) {
    switch (type) {
      case "userCashBack":
        this.userCashBack -= 1;
        this.bankCashBack += 1;
        break;
      case "bankCashBack":
        this.bankCashBack -= 1;
        this.userCashBack += 1;
        break;
      case "shopCashBack":
        if (this.userCashBack || this.bankCashBack) {
          this.shopCashBack -= 1;
          this.userCashBack ? this.userCashBack -= 1 : this.bankCashBack -= 1;
        }
        break;
    }
  }
}
