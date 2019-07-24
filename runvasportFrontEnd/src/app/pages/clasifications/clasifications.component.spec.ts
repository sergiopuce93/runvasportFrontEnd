import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificationsComponent } from './clasifications.component';

describe('ClasificationsComponent', () => {
  let component: ClasificationsComponent;
  let fixture: ComponentFixture<ClasificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
