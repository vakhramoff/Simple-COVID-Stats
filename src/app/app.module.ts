import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeGerman from '@angular/common/locales/de';
import localeRussian from '@angular/common/locales/ru';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryPageComponent } from './country-page/country-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from './shared/shared.module';
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
