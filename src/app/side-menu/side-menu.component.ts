import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { sideMenuLoginedItems } from './side-menu';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  items: NbMenuItem[] = sideMenuLoginedItems;

  constructor() { }

  ngOnInit(): void {
  }

}
