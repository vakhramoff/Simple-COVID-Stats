import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './reusable-components/main-layout/main-layout.component';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { DataCardComponent } from './reusable-components/data-card/data-card.component';
import { RouterModule } from '@angular/router';
import { FooterLayoutComponent } from './reusable-components/footer-layout/footer-layout.component';
import { HeaderLayoutComponent } from './reusable-components/header-layout/header-layout.component';

@NgModule({
  declarations: [MainLayoutComponent, DataCardComponent, FooterLayoutComponent, HeaderLayoutComponent],
  imports: [HttpClientModule, CommonModule, IconSpriteModule, RouterModule],
  exports: [HttpClientModule, IconSpriteModule, MainLayoutComponent, DataCardComponent],
})
export class SharedModule {}
