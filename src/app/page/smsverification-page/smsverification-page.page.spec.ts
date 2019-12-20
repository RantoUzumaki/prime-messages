import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SmsverificationPagePage } from './smsverification-page.page';

describe('SmsverificationPagePage', () => {
    let component: SmsverificationPagePage;
    let fixture: ComponentFixture<SmsverificationPagePage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SmsverificationPagePage ],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(SmsverificationPagePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
