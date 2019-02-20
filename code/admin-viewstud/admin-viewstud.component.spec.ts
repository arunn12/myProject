import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewstudComponent } from './admin-viewstud.component';

describe('AdminViewstudComponent', () => {
  let component: AdminViewstudComponent;
  let fixture: ComponentFixture<AdminViewstudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewstudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewstudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
