import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookseriesComponent } from './bookseries.component';

describe('BookseriesComponent', () => {
  let component: BookseriesComponent;
  let fixture: ComponentFixture<BookseriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookseriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
