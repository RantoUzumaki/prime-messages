import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChannelinfoPagePage } from './channelinfo-page.page';

describe('ChannelinfoPagePage', () => {
  let component: ChannelinfoPagePage;
  let fixture: ComponentFixture<ChannelinfoPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelinfoPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChannelinfoPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
