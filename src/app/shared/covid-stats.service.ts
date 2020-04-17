import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StatisticInfo } from './interfaces/statistic-info';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CovidStatsService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<StatisticInfo> {
    return this.http.get<StatisticInfo>(`${environment.covidApiUrl}/all`).pipe(tap((data) => console.log(data)));
  }
}
