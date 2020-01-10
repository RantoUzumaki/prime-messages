import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManageChannelPagePage } from './manage-channel-page.page';

describe('ManageChannelPagePage', () => {
    let component: ManageChannelPagePage;
    let fixture: ComponentFixture<ManageChannelPagePage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [ ManageChannelPagePage ],
        imports: [IonicModule.forRoot()]
    }).compileComponents();

        fixture = TestBed.createComponent(ManageChannelPagePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
