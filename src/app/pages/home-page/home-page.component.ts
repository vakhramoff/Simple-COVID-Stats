import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { PipesModule } from '@vakhramoff/angular-utils';
import { Observable } from 'rxjs';
import { AllStatisticInfo, CovidStatsService } from '../../data-access';
import { DataCardComponent, MainLayoutComponent } from '../../layout';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, DataCardComponent, MainLayoutComponent, TranslocoModule, PipesModule],
})
export class HomePageComponent {
  readonly allStats$: Observable<AllStatisticInfo> = this.covidStatsService.getAll();

  constructor(private readonly covidStatsService: CovidStatsService, private readonly translocoService: TranslocoService) {}

  get activeLocale() {
    return this.translocoService.getActiveLang();
  }
}
