import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageChannelInfoPagePageRoutingModule } from './manage-channel-info-page-routing.module';

import { ManageChannelInfoPagePage } from './manage-channel-info-page.page';

@NgModule({
	imports: [
	    CommonModule,
	    FormsModule,
	    IonicModule,
	    ManageChannelInfoPagePageRoutingModule
	],
	declarations: [ManageChannelInfoPagePage]
})
export class ManageChannelInfoPagePageModule {}
