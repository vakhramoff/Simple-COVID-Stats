import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MainLayoutComponent } from './reusable-components/main-layout/main-layout.component';
import { CommonModule } from '@angular/common';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { DataCardComponent } from './reusable-components/data-card/data-card.component';

@NgModule({
  declarations: [MainLayoutComponent, DataCardComponent],
  imports: [HttpClientModule, CommonModule, IconSpriteModule],
  exports: [MainLayoutComponent, HttpClientModule, IconSpriteModule, DataCardComponent],
})
export class SharedModule {}
