import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManageChannelInfoPagePage } from './manage-channel-info-page.page';

describe('ManageChannelInfoPagePage', () => {
    let component: ManageChannelInfoPagePage;
    let fixture: ComponentFixture<ManageChannelInfoPagePage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ManageChannelInfoPagePage ],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(ManageChannelInfoPagePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
