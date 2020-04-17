import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localeRussian from '@angular/common/locales/ru';
import { MainLayoutComponent } from './shared/reusable-components/main-layout/main-layout.component';
import { SharedModule } from './shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';

registerLocaleData(localeRussian, 'ru');

@NgModule({
  declarations: [AppComponent, MainLayoutComponent, HomePageComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
