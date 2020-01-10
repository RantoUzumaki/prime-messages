import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageChannelSendPagePage } from './manage-channel-send-page.page';

const routes: Routes = [
    {
    	path: '',
     	component: ManageChannelSendPagePage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ManageChannelSendPagePageRoutingModule {}
