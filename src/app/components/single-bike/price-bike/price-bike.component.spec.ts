import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceBikeComponent } from './price-bike.component';

describe('PriceBikeComponent', () => {
  let component: PriceBikeComponent;
  let fixture: ComponentFixture<PriceBikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceBikeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
