import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MainLayoutComponent } from './reusable-components/main-layout/main-layout.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [HttpClientModule, CommonModule],
  exports: [MainLayoutComponent, HttpClientModule],
})
export class SharedModule {}
