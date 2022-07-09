import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NbCalendarRange, NbDateService } from '@nebular/theme';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  @Output() onDateRangeChange: EventEmitter<NbCalendarRange<Date>> = new EventEmitter<NbCalendarRange<Date>>();

  range: NbCalendarRange<Date>;

  constructor(protected dateService: NbDateService<Date>) {
    this.range = {
      start: this.dateService.addDay(this.monthStart, 3),
      end: this.dateService.addDay(this.monthEnd, -3),
    };
  }

  public ngOnInit(): void {
  }

  get monthStart(): Date {
    return this.dateService.getMonthStart(new Date());
  }

  get monthEnd(): Date {
    return this.dateService.getMonthEnd(new Date());
  }

  public rangeChange(event: any): void {
    this.onDateRangeChange.emit(this.range);
  }
}
