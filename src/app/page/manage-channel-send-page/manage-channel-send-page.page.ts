import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-manage-channel-send-page',
    templateUrl: './manage-channel-send-page.page.html',
    styleUrls: ['./manage-channel-send-page.page.scss'],
})
export class ManageChannelSendPagePage implements OnInit {

    constructor() { }

    ngOnInit() {}

    popupvalidity() {
    	document.getElementById("popupdiv").style.display = "block"
    }

    closepopup() {
    	document.getElementById("popupdiv").style.display = "none"
    }

    savetimedate() {
    	document.getElementById("popupdiv").style.display = "none"
    }

}
