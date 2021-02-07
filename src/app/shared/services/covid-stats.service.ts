import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AllStatisticInfo } from '../interfaces/all-statistic-info';
import { CountryStatisticInfo } from '../interfaces/country-statistic-info';

@Injectable({
  providedIn: 'root',
})
export class CovidStatsService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<AllStatisticInfo> {
    return this.http.get<AllStatisticInfo>(`${environment.covidApiUrl}/all`).pipe(
      tap((data) => {
        console.info('General statistics', data);
      }),
      catchError((error) => {
        console.warn('An error occurred while loading general statistics', error);

        throw error;
      }),
    );
  }

  public getByCountry(countryCode: string): Observable<CountryStatisticInfo> {
    return this.http.get<CountryStatisticInfo>(`${environment.covidApiUrl}/countries/${countryCode}`).pipe(
      tap((data) => {
        console.info(`Statistics by country: ${countryCode}`, data);
      }),
      catchError((error) => {
        console.warn(`An error occurred while loading statistics for country: ${countryCode}`, error);

        throw error;
      }),
    );
  }
}
