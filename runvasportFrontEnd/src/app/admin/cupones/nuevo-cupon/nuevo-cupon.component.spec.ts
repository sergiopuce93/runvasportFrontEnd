import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoCuponComponent } from './nuevo-cupon.component';

describe('NuevoCuponComponent', () => {
  let component: NuevoCuponComponent;
  let fixture: ComponentFixture<NuevoCuponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoCuponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoCuponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
