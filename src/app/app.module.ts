import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeGerman from '@angular/common/locales/de';
import localeRussian from '@angular/common/locales/ru';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CovidStatsService } from './data-access';
import { API_CONFIG_TOKEN, TranslocoRootModule } from './utils/';

registerLocaleData(localeRussian, 'ru');
registerLocaleData(localeGerman, 'de');

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, HttpClientModule, TranslocoRootModule],
  providers: [
    CovidStatsService,
    {
      provide: API_CONFIG_TOKEN,
      useValue: { covidApiUrl: 'https://disease.sh/v3/covid-19' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
