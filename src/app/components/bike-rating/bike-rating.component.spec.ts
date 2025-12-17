import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeRatingComponent } from './bike-rating.component';

describe('BikeRatingComponent', () => {
  let component: BikeRatingComponent;
  let fixture: ComponentFixture<BikeRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BikeRatingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
