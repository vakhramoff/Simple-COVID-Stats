import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoadedEvent, TranslocoService } from '@ngneat/transloco';
import { Title } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { filter } from 'rxjs/operators';
import { TranslocoEvents } from '@ngneat/transloco/lib/types';
import { Subscription } from 'rxjs';

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
    console.log('Выбранный язык приложения', appLanguage);

    this.translocoSub$ = this.translocoService.events$
      .pipe(filter((event: TranslocoEvents) => event.type === 'translationLoadSuccess'))
      .subscribe((successEvent: LoadedEvent) => {
        appTitle = this.translocoService.translate('commonAppVars.title');

        this.setTitle(appTitle);
      });
  }

  ngOnDestroy() {
    this.translocoSub$?.unsubscribe();
  }

  private setTitle(newTitle: string) {
    this.titleBarLocalizationService.setTitle(newTitle);
  }
}
