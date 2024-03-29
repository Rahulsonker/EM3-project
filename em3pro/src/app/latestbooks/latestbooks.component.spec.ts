import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestbooksComponent } from './latestbooks.component';

describe('LatestbooksComponent', () => {
  let component: LatestbooksComponent;
  let fixture: ComponentFixture<LatestbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestbooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LatestbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
