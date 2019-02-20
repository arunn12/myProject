import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewcustComponent } from './admin-viewcust.component';

describe('AdminViewcustComponent', () => {
  let component: AdminViewcustComponent;
  let fixture: ComponentFixture<AdminViewcustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewcustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewcustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
