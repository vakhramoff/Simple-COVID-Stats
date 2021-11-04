import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Observable } from 'rxjs';
import { AllStatisticInfo } from '../shared/interfaces/all-statistic-info';
import { CovidStatsService } from '../shared/services/covid-stats.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  readonly allStats$: Observable<AllStatisticInfo> = this.covidStatsService.getAll();

  constructor(private readonly covidStatsService: CovidStatsService, private readonly translocoService: TranslocoService) {}

  get activeLocale() {
    return this.translocoService.getActiveLang();
  }
}
