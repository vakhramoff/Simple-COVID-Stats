import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { CountryStatisticInfo } from '../shared/interfaces/country-statistic-info';
import { CovidStatsService } from '../shared/services/covid-stats.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryPageComponent {
  private countryCode!: string | null;
  private countryName!: string | null;

  public readonly countryStat$: Observable<CountryStatisticInfo> = this.route.params.pipe(
    tap(() => {
      this.countryCode = null;
      this.countryName = null;
    }),
    switchMap(({ countryCode }: Params) =>
      this.covidStatsService.getByCountry(countryCode).pipe(
        tap(({ country }: CountryStatisticInfo) => {
          this.countryName = country;
          this.countryCode = countryCode.toLocaleUpperCase();
        }),
      ),
    ),
  );

  constructor(
    private readonly covidStatsService: CovidStatsService,
    private readonly route: ActivatedRoute,
    private readonly translocoService: TranslocoService,
  ) {}

  get activeLocale() {
    return this.translocoService.getActiveLang();
  }

  get headerSubTitle(): string | null {
    return this.countryCode && this.countryName ? `${this.countryName}, ${this.countryCode}` : '...';
  }
}
