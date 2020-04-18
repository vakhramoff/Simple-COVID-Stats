import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AllStatisticInfo } from './interfaces/all-statistic-info';
import { environment } from '../../environments/environment';
import { catchError, tap } from 'rxjs/operators';
import { CountryStatisticInfo } from './interfaces/country-statistic-info';

@Injectable({
  providedIn: 'root',
})
export class CovidStatsService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<AllStatisticInfo> {
    return this.http.get<AllStatisticInfo>(`${environment.covidApiUrl}/all`).pipe(
      tap((data) => {
        console.log('Полная статистика:', data);
      }),
      catchError((error) => {
        console.warn('Возникла ошибка при загрузке статистики для всех стран: ', error);

        throw error;
      }),
    );
  }

  public getByCountry(countryCode: string): Observable<CountryStatisticInfo> {
    return this.http.get<CountryStatisticInfo>(`${environment.covidApiUrl}/countries/${countryCode}`).pipe(
      tap((data) => {
        console.log(`Статистика по стране ${countryCode}:`, data);
      }),
      catchError((error) => {
        console.warn(`Возникла ошибка при загрузке статистики для страны: ${countryCode}`, error);

        throw error;
      }),
    );
  }
}
