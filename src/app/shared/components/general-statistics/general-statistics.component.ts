import { Component, OnInit } from '@angular/core';
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

}
