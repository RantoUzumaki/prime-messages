import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPagePageRoutingModule } from './menu-page-routing.module';

import { MenuPagePage } from './menu-page.page';

import { SidemenuComponent } from '../../component/sidemenu/sidemenu.component'

import { SuperTabsModule } from '@ionic-super-tabs/angular';

@NgModule({
  	imports: [
    	CommonModule,
	    FormsModule,
	    IonicModule,
	    MenuPagePageRoutingModule,
	    SuperTabsModule,
  	],
  	declarations: [MenuPagePage, SidemenuComponent]
})
export class MenuPagePageModule {}
