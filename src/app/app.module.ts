import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import localeRussian from '@angular/common/locales/ru';
import localeGerman from '@angular/common/locales/de';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CountryPageComponent } from './country-page/country-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { TranslocoRootModule } from './transloco/transloco-root.module';

registerLocaleData(localeRussian, 'ru');
registerLocaleData(localeGerman, 'de');

@NgModule({
  declarations: [AppComponent, HomePageComponent, CountryPageComponent, ErrorPageComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, SharedModule, HttpClientModule, TranslocoRootModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
