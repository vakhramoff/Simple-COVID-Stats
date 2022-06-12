import { NgModule } from '@angular/core';
import { translocoConfig, TranslocoModule, TRANSLOCO_CONFIG, TRANSLOCO_LOADER } from '@ngneat/transloco';
import { environment } from '../../../environments/environment';
import { TranslocoHttpLoader } from './transloco-http-loader.service';

@NgModule({
  exports: [TranslocoModule],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: ['ru', 'en', 'de'],
        defaultLang: 'ru',
        reRenderOnLangChange: true,
        prodMode: environment.production,
      }),
    },
    {
      provide: TRANSLOCO_LOADER,
      useClass: TranslocoHttpLoader,
    },
  ],
})
export class TranslocoRootModule {}
