import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CovidStatsService } from '../shared/covid-stats.service';
import { AllStatisticInfo } from '../shared/interfaces/all-statistic-info';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass'],
})
export class HomePageComponent implements OnInit {
  public allStats$: Observable<AllStatisticInfo>;

  constructor(private covidStatsService: CovidStatsService) {}

  ngOnInit(): void {
    this.allStats$ = this.covidStatsService.getAll();
  }
}
