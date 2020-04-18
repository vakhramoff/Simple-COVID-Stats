import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CovidStatsService } from '../shared/covid-stats.service';
import { CountryStatisticInfo } from '../shared/interfaces/country-statistic-info';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.sass'],
})
export class CountryPageComponent implements OnInit {
  public countryStat$: Observable<CountryStatisticInfo>;
  public countryCode: string;

  constructor(private covidStatsService: CovidStatsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.countryStat$ = this.route.params.pipe(
      switchMap((params: Params) => {
        this.countryCode = params.countryCode;
        return this.covidStatsService.getByCountry(params.countryCode);
      }),
    );
  }
}
