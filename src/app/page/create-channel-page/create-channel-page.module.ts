import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateChannelPagePageRoutingModule } from './create-channel-page-routing.module';

import { CreateChannelPagePage } from './create-channel-page.page';

@NgModule({
	imports: [
	    CommonModule,
	    FormsModule,
	    IonicModule,
	    CreateChannelPagePageRoutingModule
	],
	declarations: [CreateChannelPagePage]
})
export class CreateChannelPagePageModule {}
