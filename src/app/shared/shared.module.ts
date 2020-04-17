import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MainLayoutComponent } from './reusable-components/main-layout/main-layout.component';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [HttpClientModule],
  exports: [MainLayoutComponent, HttpClientModule],
})
export class SharedModule {}
