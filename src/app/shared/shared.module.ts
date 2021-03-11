import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoPipe } from '@ngneat/transloco';
import { DirectivesModule as AngularUtilsDirectivesModule, PipesModule as AngularUtilsPipesModule } from '@vakhramoff/angular-utils';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { DataCardComponent } from './reusable-components/data-card/data-card.component';
import { FooterLayoutComponent } from './reusable-components/footer-layout/footer-layout.component';
import { HeaderLayoutComponent } from './reusable-components/header-layout/header-layout.component';
import { MainLayoutComponent } from './reusable-components/main-layout/main-layout.component';

@NgModule({
  declarations: [MainLayoutComponent, DataCardComponent, FooterLayoutComponent, HeaderLayoutComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    IconSpriteModule,
    RouterModule,
    TranslocoModule,
    AngularUtilsDirectivesModule,
    AngularUtilsPipesModule,
  ],
  exports: [
    HttpClientModule,
    IconSpriteModule,
    MainLayoutComponent,
    DataCardComponent,
    TranslocoModule,
    AngularUtilsDirectivesModule,
    AngularUtilsPipesModule,
  ],
  providers: [TranslocoPipe],
})
export class SharedModule {}
