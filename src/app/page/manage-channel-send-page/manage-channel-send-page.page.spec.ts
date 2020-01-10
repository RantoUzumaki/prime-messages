import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManageChannelSendPagePage } from './manage-channel-send-page.page';

describe('ManageChannelSendPagePage', () => {
    let component: ManageChannelSendPagePage;
    let fixture: ComponentFixture<ManageChannelSendPagePage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ManageChannelSendPagePage ],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(ManageChannelSendPagePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
