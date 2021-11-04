import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { HandleHttpErrors } from '@vakhramoff/angular-utils';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AllStatisticInfo } from '../interfaces/all-statistic-info';
import { CountryStatisticInfo } from '../interfaces/country-statistic-info';
import { ApiConfig, API_CONFIG_TOKEN } from '../tokens/api-config.token';

@Injectable()
export class CovidStatsService {
  constructor(
    @Inject(API_CONFIG_TOKEN)
    private readonly apiConfig: ApiConfig,
    private readonly http: HttpClient,
  ) {}

  @HandleHttpErrors()
  getAll(): Observable<AllStatisticInfo> {
    return this.http.get<AllStatisticInfo>(`${this.apiConfig.covidApiUrl}/all`).pipe(
      tap((data) => {
        console.info('General statistics', data);
      }),
    );
  }

  @HandleHttpErrors()
  getByCountry(countryCode: string): Observable<CountryStatisticInfo> {
    return this.http.get<CountryStatisticInfo>(`${this.apiConfig.covidApiUrl}/countries/${countryCode}`).pipe(
      tap((data) => {
        console.info(`Statistics by country: ${countryCode}`, data);
      }),
    );
  }
}
