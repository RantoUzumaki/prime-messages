import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChannelinfoPagePage } from './channelinfo-page.page';

const routes: Routes = [
  {
    path: '',
    component: ChannelinfoPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChannelinfoPagePageRoutingModule {}
