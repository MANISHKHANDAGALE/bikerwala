import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeFiltersComponent } from './bike-filters.component';

describe('BikeFiltersComponent', () => {
  let component: BikeFiltersComponent;
  let fixture: ComponentFixture<BikeFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BikeFiltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
