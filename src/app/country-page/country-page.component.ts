import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
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
  providers: [UpperCasePipe],
})
export class CountryPageComponent {
  private countryCode: string;
  private countryName: string;

  public readonly countryStat$: Observable<CountryStatisticInfo> = this.route.params.pipe(
    switchMap((params: Params) => {
      this.countryCode = this.upperCasePipe.transform(params.countryCode);
      return this.covidStatsService.getByCountry(params.countryCode).pipe(
        tap((countryData: CountryStatisticInfo) => {
          this.countryName = countryData.country;
        }),
      );
    }),
  );

  constructor(
    private readonly covidStatsService: CovidStatsService,
    private readonly route: ActivatedRoute,
    private readonly upperCasePipe: UpperCasePipe,
    private readonly translocoService: TranslocoService,
  ) {}

  get activeLocale() {
    return this.translocoService.getActiveLang();
  }

  get headerSubTitle() {
    return `${this.countryCode && this.countryName ? `${this.countryName}, ${this.countryCode}` : ''}`;
  }
}
