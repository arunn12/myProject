import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewbookedComponent } from './admin-viewbooked.component';

describe('AdminViewbookedComponent', () => {
  let component: AdminViewbookedComponent;
  let fixture: ComponentFixture<AdminViewbookedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewbookedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewbookedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
