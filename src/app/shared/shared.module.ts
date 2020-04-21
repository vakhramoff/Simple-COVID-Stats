import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { MainLayoutComponent } from './reusable-components/main-layout/main-layout.component';
import { DataCardComponent } from './reusable-components/data-card/data-card.component';
import { FooterLayoutComponent } from './reusable-components/footer-layout/footer-layout.component';
import { HeaderLayoutComponent } from './reusable-components/header-layout/header-layout.component';
import { TranslocoRootModule } from '../transloco/transloco-root.module';

@NgModule({
  declarations: [MainLayoutComponent, DataCardComponent, FooterLayoutComponent, HeaderLayoutComponent],
  imports: [HttpClientModule, CommonModule, IconSpriteModule, RouterModule, TranslocoRootModule],
  exports: [HttpClientModule, IconSpriteModule, MainLayoutComponent, DataCardComponent, TranslocoRootModule],
})
export class SharedModule {}
