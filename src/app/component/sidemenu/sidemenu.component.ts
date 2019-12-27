import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
	selector: 'app-sidemenu',
	templateUrl: './sidemenu.component.html',
	styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {

    constructor(
    	private menu: MenuController,
    	public route: Router
    	) {}

    ngOnInit() {}

    home() {
    	this.route.navigate(['menu'])
        this.menu.close()
    }

}
