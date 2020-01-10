import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageChannelPagePage } from './manage-channel-page.page';

const routes: Routes = [
	{
	    path: '',
	    component: ManageChannelPagePage
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ManageChannelPagePageRoutingModule {}
