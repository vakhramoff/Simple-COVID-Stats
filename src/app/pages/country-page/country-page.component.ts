import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Self } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { PipesModule } from '@vakhramoff/angular-utils';
import { Observable } from 'rxjs';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { CountryStatisticInfo, CovidStatsService } from '../../data-access/';
import { DataCardComponent, MainLayoutComponent } from '../../layout';
import { DestroyService } from '../../utils/services/destroy.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService],
  standalone: true,
  imports: [CommonModule, DataCardComponent, MainLayoutComponent, TranslocoModule, PipesModule],
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
    takeUntil(this.destroy$),
  );

  constructor(
    @Self()
    private readonly destroy$: DestroyService,
    private readonly covidStatsService: CovidStatsService,
    private readonly route: ActivatedRoute,
    private readonly translocoService: TranslocoService,
  ) {}

  get activeLocale(): string {
    return this.translocoService.getActiveLang();
  }

  get headerSubTitle(): string | null {
    return this.countryCode && this.countryName ? `${this.countryName}, ${this.countryCode}` : '...';
  }
}
