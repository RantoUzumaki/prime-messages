import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChannelinfoPagePageRoutingModule } from './channelinfo-page-routing.module';

import { ChannelinfoPagePage } from './channelinfo-page.page';

@NgModule({
    imports: [
    	CommonModule,
    	FormsModule,
    	IonicModule,
    	ChannelinfoPagePageRoutingModule
    ],
  	declarations: [ChannelinfoPagePage]
})
export class ChannelinfoPagePageModule {}
