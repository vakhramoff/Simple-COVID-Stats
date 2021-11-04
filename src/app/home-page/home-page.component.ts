import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Observable } from 'rxjs';
import { AllStatisticInfo } from '../shared/interfaces/all-statistic-info';
import { CovidStatsService } from '../shared/services/covid-stats.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass'],
})
export class HomePageComponent implements OnInit {
  public allStats$: Observable<AllStatisticInfo>;

  constructor(private readonly covidStatsService: CovidStatsService, private readonly translocoService: TranslocoService) {}

  ngOnInit(): void {
    this.allStats$ = this.covidStatsService.getAll();
  }

  get activeLocale() {
    return this.translocoService.getActiveLang();
  }
}
