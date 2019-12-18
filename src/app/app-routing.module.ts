import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  {
    path: 'landing',
    loadChildren: () => import('./page/landing-page/landing-page.module').then( m => m.LandingPagePageModule)
  },
  {
    path: 'numberentry',
    loadChildren: () => import('./page/numberentry-page/numberentry-page.module').then( m => m.NumberentryPagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
