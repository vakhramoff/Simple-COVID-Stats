import { Component, OnInit } from '@angular/core';
import { CovidStatsService } from '../shared/covid-stats.service';
import { Observable } from 'rxjs';
import { StatisticInfo } from '../shared/interfaces/statistic-info';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass'],
})
export class HomePageComponent implements OnInit {
  public allStats$: Observable<StatisticInfo>;

  constructor(private covidStatsService: CovidStatsService) {}

  ngOnInit(): void {
    this.allStats$ = this.covidStatsService.getAll();
  }
}
