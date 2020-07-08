import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AvisoLegalPage } from './aviso-legal.page';

describe('AvisoLegalPage', () => {
  let component: AvisoLegalPage;
  let fixture: ComponentFixture<AvisoLegalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisoLegalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AvisoLegalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
