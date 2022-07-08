import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-card',
  templateUrl: './admin-card.component.html',
  styleUrls: ['./admin-card.component.scss']
})
export class AdminCardComponent implements OnInit {

  @Input() name: string = 'admin';
  @Input() title: string = 'Admin';

  constructor() { }

  ngOnInit(): void {
  }

}
