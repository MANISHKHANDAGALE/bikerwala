import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureBikeComponent } from './feature-bike.component';

describe('FeatureBikeComponent', () => {
  let component: FeatureBikeComponent;
  let fixture: ComponentFixture<FeatureBikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureBikeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
