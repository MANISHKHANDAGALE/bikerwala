import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeBrandListComponent } from './bike-brand-list.component';

describe('BikeBrandListComponent', () => {
  let component: BikeBrandListComponent;
  let fixture: ComponentFixture<BikeBrandListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BikeBrandListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeBrandListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
