import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoPipe } from '@ngneat/transloco';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { MainLayoutComponent } from './reusable-components/main-layout/main-layout.component';
import { DataCardComponent } from './reusable-components/data-card/data-card.component';
import { FooterLayoutComponent } from './reusable-components/footer-layout/footer-layout.component';
import { HeaderLayoutComponent } from './reusable-components/header-layout/header-layout.component';

@NgModule({
  declarations: [MainLayoutComponent, DataCardComponent, FooterLayoutComponent, HeaderLayoutComponent],
  imports: [HttpClientModule, CommonModule, IconSpriteModule, RouterModule, TranslocoModule],
  exports: [HttpClientModule, IconSpriteModule, MainLayoutComponent, DataCardComponent, TranslocoModule],
  providers: [TranslocoPipe],
})
export class SharedModule {}
