import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmsverificationPagePageRoutingModule } from './smsverification-page-routing.module';

import { SmsverificationPagePage } from './smsverification-page.page';

@NgModule({
	imports: [
	    CommonModule,
	    FormsModule,
	    IonicModule,
	    SmsverificationPagePageRoutingModule
	],
	declarations: [SmsverificationPagePage]
})
export class SmsverificationPagePageModule {}
