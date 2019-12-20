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
    {
        path: 'smsverification',
        loadChildren: () => import('./page/smsverification-page/smsverification-page.module').then( m => m.SmsverificationPagePageModule)
    },
    {
        path: 'profile',
        loadChildren: () => import('./page/profile-page/profile-page.module').then( m => m.ProfilePagePageModule)
    },
    {
        path: 'menu',
        loadChildren: () => import('./page/menu-page/menu-page.module').then( m => m.MenuPagePageModule)
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
