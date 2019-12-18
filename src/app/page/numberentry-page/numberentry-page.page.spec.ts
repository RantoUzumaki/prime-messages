import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NumberentryPagePage } from './numberentry-page.page';

describe('NumberentryPagePage', () => {
  let component: NumberentryPagePage;
  let fixture: ComponentFixture<NumberentryPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberentryPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NumberentryPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
