import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageChannelSendPagePageRoutingModule } from './manage-channel-send-page-routing.module';

import { ManageChannelSendPagePage } from './manage-channel-send-page.page';

@NgModule({
	imports: [
	    CommonModule,
	    FormsModule,
	    IonicModule,
	    ManageChannelSendPagePageRoutingModule
	],
	declarations: [ManageChannelSendPagePage]
})
export class ManageChannelSendPagePageModule {}
