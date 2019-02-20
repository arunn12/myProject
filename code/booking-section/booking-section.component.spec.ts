import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingSectionComponent } from './booking-section.component';

describe('BookingSectionComponent', () => {
  let component: BookingSectionComponent;
  let fixture: ComponentFixture<BookingSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
