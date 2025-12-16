import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandSimilarCardComponent } from './brand-similar-card.component';

describe('BrandSimilarCardComponent', () => {
  let component: BrandSimilarCardComponent;
  let fixture: ComponentFixture<BrandSimilarCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandSimilarCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandSimilarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
