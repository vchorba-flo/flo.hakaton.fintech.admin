import {Component, Input, OnInit} from '@angular/core';
import {NbComponentStatus} from "@nebular/theme/components/component-status";

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss']
})
export class ShopCardComponent implements OnInit {
  @Input() status: NbComponentStatus
  @Input() shopName: string
  @Input() userCashBack: number
  @Input() bankCashBack: number
  @Input() shopCashBack: number

  constructor() {
  }

  ngOnInit(): void {
  }

}
