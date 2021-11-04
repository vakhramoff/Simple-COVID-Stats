import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslocoService } from '@ngneat/transloco';
import { Subscription } from 'rxjs';
import { APP_TITLE_TOKEN } from './shared/tokens';

export enum EAvailableAppLanguages {
  en = 'en',
  ru = 'ru',
  de = 'de',
}

export type TAppLanguage = EAvailableAppLanguages;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit, OnDestroy {
  private translocoSub$: Subscription;

  constructor(
    @Inject(APP_TITLE_TOKEN)
    private readonly defaultAppTitle: string,
    private readonly translocoService: TranslocoService,
    private readonly titleBarLocalizationService: Title,
  ) {}

  ngOnInit(): void {
    const browserLanguageCode = navigator.language;
    const appTitle: string = this.defaultAppTitle;

    let appLanguage: TAppLanguage;

    switch (true) {
      case browserLanguageCode.startsWith(EAvailableAppLanguages.ru):
        this.translocoService.setActiveLang(EAvailableAppLanguages.ru);
        break;
      case browserLanguageCode.startsWith(EAvailableAppLanguages.de):
        this.translocoService.setActiveLang(EAvailableAppLanguages.de);
        break;
      default:
        this.translocoService.setActiveLang(EAvailableAppLanguages.en);
        break;
    }

    this.setTitle(appTitle);

    appLanguage = this.translocoService.getActiveLang() as TAppLanguage;
    console.info('Language set', appLanguage);

    this.translocoSub$ = this.translocoService.selectTranslate('commonAppVars.title').subscribe((translatedTitle: string) => {
      this.setTitle(translatedTitle);
    });
  }

  ngOnDestroy() {
    this.translocoSub$?.unsubscribe();
  }

  private setTitle(newTitle: string) {
    this.titleBarLocalizationService.setTitle(newTitle);
  }
}
