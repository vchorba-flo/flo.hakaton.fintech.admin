import { Component, OnInit } from '@angular/core';
import { NbCalendarRange } from '@nebular/theme';
import { Observable } from 'rxjs';
import { ApiServiceService, GeneralStatistics } from '../../../core/services/api-service.service';

@Component({
  selector: 'app-general-statistics',
  templateUrl: './general-statistics.component.html',
  styleUrls: ['./general-statistics.component.scss']
})
export class GeneralStatisticsComponent implements OnInit {

  public generalStatistics$: Observable<GeneralStatistics[]>;

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.generalStatistics$ = this.apiService.getGeneralStatistics();
  }

  public dateRangeChange(range: NbCalendarRange<Date>): void {
    if (!range.end?.getTime()) {
      return;
    }
    this.generalStatistics$ = this.apiService.getGeneralStatistics(range)
  }
}
