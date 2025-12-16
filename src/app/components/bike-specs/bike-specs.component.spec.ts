import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeSpecsComponent } from './bike-specs.component';

describe('BikeSpecsComponent', () => {
  let component: BikeSpecsComponent;
  let fixture: ComponentFixture<BikeSpecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BikeSpecsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
