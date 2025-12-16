import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeBrandDetailsComponent } from './bike-brand-details.component';

describe('BikeBrandDetailsComponent', () => {
  let component: BikeBrandDetailsComponent;
  let fixture: ComponentFixture<BikeBrandDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BikeBrandDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeBrandDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
