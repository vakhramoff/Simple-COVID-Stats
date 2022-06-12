import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslocoService } from '@ngneat/transloco';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { APP_TITLE_TOKEN } from './utils';

export enum AvailableAppLanguages {
  English = 'en',
  Russian = 'ru',
  German = 'de',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();

  constructor(
    @Inject(APP_TITLE_TOKEN)
    private readonly defaultAppTitle: string,
    private readonly translocoService: TranslocoService,
    private readonly titleBarLocalizationService: Title,
  ) {}

  ngOnInit(): void {
    const checkBrowserLanguage = (language: AvailableAppLanguages) => {
      const browserLanguageCode = navigator.language.toLocaleLowerCase();

      return browserLanguageCode.startsWith(language);
    };

    switch (true) {
      case checkBrowserLanguage(AvailableAppLanguages.Russian):
        this.translocoService.setActiveLang(AvailableAppLanguages.Russian);
        break;
      case checkBrowserLanguage(AvailableAppLanguages.German):
        this.translocoService.setActiveLang(AvailableAppLanguages.German);
        break;
      default:
        this.translocoService.setActiveLang(AvailableAppLanguages.English);
        break;
    }

    this.setTitle(this.defaultAppTitle);

    console.info('App title set', this.defaultAppTitle);
    console.info('Language set', this.translocoService.getActiveLang());

    this.initTitleSubscription();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initTitleSubscription(): void {
    this.translocoService
      .selectTranslate('commonAppVars.title')
      .pipe(takeUntil(this.destroy$))
      .subscribe((translatedTitle: string) => {
        this.setTitle(translatedTitle);
      });
  }

  private setTitle(newTitle: string): void {
    this.titleBarLocalizationService.setTitle(newTitle);
  }
}
