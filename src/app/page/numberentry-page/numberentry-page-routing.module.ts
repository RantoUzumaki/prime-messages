import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NumberentryPagePage } from './numberentry-page.page';

const routes: Routes = [
  {
    path: '',
    component: NumberentryPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NumberentryPagePageRoutingModule {}
