import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HandleHttpErrors } from '@vakhramoff/angular-utils';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AllStatisticInfo } from '../interfaces/all-statistic-info';
import { CountryStatisticInfo } from '../interfaces/country-statistic-info';

@Injectable({
  providedIn: 'root',
})
export class CovidStatsService {
  constructor(private http: HttpClient) {}

  @HandleHttpErrors()
  public getAll(): Observable<AllStatisticInfo> {
    return this.http.get<AllStatisticInfo>(`${environment.covidApiUrl}/all`).pipe(
      tap((data) => {
        console.info('General statistics', data);
      }),
    );
  }

  @HandleHttpErrors()
  public getByCountry(countryCode: string): Observable<CountryStatisticInfo> {
    return this.http.get<CountryStatisticInfo>(`${environment.covidApiUrl}/countries/${countryCode}`).pipe(
      tap((data) => {
        console.info(`Statistics by country: ${countryCode}`, data);
      }),
    );
  }
}
