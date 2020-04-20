import { Component, OnInit } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { CountryStatisticInfo } from '../shared/interfaces/country-statistic-info';
import { CovidStatsService } from '../shared/services/covid-stats.service';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.sass'],
  providers: [UpperCasePipe],
})
export class CountryPageComponent implements OnInit {
  public countryStat$: Observable<CountryStatisticInfo>;

  private countryCode: string;
  private countryName: string;

  constructor(
    private covidStatsService: CovidStatsService,
    private route: ActivatedRoute,
    private upperCasePipe: UpperCasePipe,
    private translocoService: TranslocoService,
  ) {}

  ngOnInit(): void {
    this.countryStat$ = this.route.params.pipe(
      switchMap((params: Params) => {
        this.countryCode = this.upperCasePipe.transform(params.countryCode);
        return this.covidStatsService.getByCountry(params.countryCode).pipe(
          tap((countryData: CountryStatisticInfo) => {
            this.countryName = countryData.country;
          }),
        );
      }),
    );
  }

  get headerSubTitle() {
    return `${this.countryCode && this.countryName ? `${this.countryName}, ${this.countryCode}` : ''}`;
  }
}
