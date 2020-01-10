import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateChannelPagePage } from './create-channel-page.page';

const routes: Routes = [
	{
	    path: '',
	    component: CreateChannelPagePage
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CreateChannelPagePageRoutingModule {}
