import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslocoService } from '@ngneat/transloco';
import { Subscription } from 'rxjs';
import { environment } from '../environments/environment';

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

  constructor(private translocoService: TranslocoService, private titleBarLocalizationService: Title) {}

  ngOnInit(): void {
    const browserLanguageCode = navigator.language;

    let appLanguage: TAppLanguage;
    let appTitle: string = environment.initialAppTitle;

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

    appLanguage = <TAppLanguage>this.translocoService.getActiveLang();
    console.info('Automatically detected language', appLanguage);

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
