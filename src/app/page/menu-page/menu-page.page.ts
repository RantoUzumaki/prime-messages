import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  	selector: 'app-menu-page',
  	templateUrl: './menu-page.page.html',
  	styleUrls: ['./menu-page.page.scss'],
})
export class MenuPagePage implements OnInit {

	homepage: string ="home"

  	constructor(public route: Router) {}

  	ngOnInit() {}

  	getUrl() {
    	localStorage.setItem("url", window.location.href)
    	this.route.navigate(['channel'])
  	}

}
