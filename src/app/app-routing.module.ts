import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryPageComponent, HomePageComponent } from './pages';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'country/:countryCode', component: CountryPageComponent },
  {
    path: '**',
    loadComponent: () => import('./pages/error-page/error-page.component').then((c) => c.ErrorPageComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'corrected' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
