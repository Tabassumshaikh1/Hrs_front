import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTanckerComponent } from './book-tancker.component';

describe('BookTanckerComponent', () => {
  let component: BookTanckerComponent;
  let fixture: ComponentFixture<BookTanckerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookTanckerComponent]
    });
    fixture = TestBed.createComponent(BookTanckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
