import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageChannelPagePageRoutingModule } from './manage-channel-page-routing.module';

import { ManageChannelPagePage } from './manage-channel-page.page';

@NgModule({
	imports: [
	    CommonModule,
	    FormsModule,
	    IonicModule,
	    ManageChannelPagePageRoutingModule
	],
	declarations: [ManageChannelPagePage]
})
export class ManageChannelPagePageModule {}
