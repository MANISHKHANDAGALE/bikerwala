import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseBikeComponent } from './browse-bike.component';

describe('BrowseBikeComponent', () => {
  let component: BrowseBikeComponent;
  let fixture: ComponentFixture<BrowseBikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowseBikeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
