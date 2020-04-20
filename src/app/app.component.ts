import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

export enum EAvailableAppLanguages {
  en = 'en',
  ru = 'ru',
}

type TAppLanguage = EAvailableAppLanguages;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  constructor(private translocoService: TranslocoService) {
    // translocoService.setActiveLang(EAvailableAppLanguages.en);

    const appDefaultLanguage: TAppLanguage = <TAppLanguage>translocoService.getDefaultLang();

    console.log('Default language', appDefaultLanguage);
  }
}
