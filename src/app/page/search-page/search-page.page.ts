import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-search-page',
    templateUrl: './search-page.page.html',
    styleUrls: ['./search-page.page.scss'],
})
export class SearchPagePage implements OnInit {

    constructor(public route: Router) { }

    ngOnInit() {}

    getUrl() {
    	localStorage.setItem("url", window.location.href)
    	this.route.navigate(['channel'])
    }

}
