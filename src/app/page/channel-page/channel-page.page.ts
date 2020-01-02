import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-channel-page',
    templateUrl: './channel-page.page.html',
    styleUrls: ['./channel-page.page.scss'],
})
export class ChannelPagePage implements OnInit {

    constructor(public route: Router) { }

    ngOnInit() {}

    backBtn() {
    	var url = localStorage.url
    	if(url == "http://localhost:8100/search") {
    		this.route.navigate(['search'])
    	} else if(url == "http://localhost:8100/menu") {
    		this.route.navigate(['menu'])
    	}
    }

}
