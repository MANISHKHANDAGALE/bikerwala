import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewBikeComponent } from './overview-bike.component';

describe('OverviewBikeComponent', () => {
  let component: OverviewBikeComponent;
  let fixture: ComponentFixture<OverviewBikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewBikeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
