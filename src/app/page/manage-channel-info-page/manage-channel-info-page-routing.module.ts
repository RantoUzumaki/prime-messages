import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageChannelInfoPagePage } from './manage-channel-info-page.page';

const routes: Routes = [
	{
	    path: '',
	    component: ManageChannelInfoPagePage
	}
];

@NgModule({
  	imports: [RouterModule.forChild(routes)],
 	exports: [RouterModule],
})
export class ManageChannelInfoPagePageRoutingModule {}
