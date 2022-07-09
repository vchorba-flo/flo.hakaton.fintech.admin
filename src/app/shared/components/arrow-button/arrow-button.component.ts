import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NbComponentShape, NbComponentSize} from "@nebular/theme";

@Component({
  selector: 'app-arrow-button',
  templateUrl: './arrow-button.component.html',
  styleUrls: ['./arrow-button.component.scss']
})
export class ArrowButtonComponent implements OnInit {
  @Input() size: NbComponentSize = 'small';
  @Input() shape: NbComponentShape = 'round';
  @Input() textAfterIcon: string = '';
  @Input() textBeforeIcon: string = '';
  @Input() isDisable: boolean = false;
  @Input() evaIconName: string = '';

  @Output() action: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(){
    this.action.emit()
  }
}
