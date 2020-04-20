import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

export enum EAvailableAppLanguages {
  en = 'en',
  ru = 'ru',
}

export type TAppLanguage = EAvailableAppLanguages;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  constructor(private translocoService: TranslocoService) {
    const browserLanguageCode = navigator.language;

    let appLanguage: TAppLanguage;

    if (browserLanguageCode.startsWith(EAvailableAppLanguages.ru)) {
      translocoService.setActiveLang(EAvailableAppLanguages.ru);
    } else {
      translocoService.setActiveLang(EAvailableAppLanguages.en);
    }

    appLanguage = <TAppLanguage>translocoService.getDefaultLang();
    console.log('Выбранный язык приложения', appLanguage);
  }
}
