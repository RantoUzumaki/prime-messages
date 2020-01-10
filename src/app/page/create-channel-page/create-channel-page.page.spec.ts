import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateChannelPagePage } from './create-channel-page.page';

describe('CreateChannelPagePage', () => {
    let component: CreateChannelPagePage;
    let fixture: ComponentFixture<CreateChannelPagePage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ CreateChannelPagePage ],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(CreateChannelPagePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
