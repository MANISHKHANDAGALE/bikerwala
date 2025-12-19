import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikedetailTableComponent } from './bikedetail-table.component';

describe('BikedetailTableComponent', () => {
  let component: BikedetailTableComponent;
  let fixture: ComponentFixture<BikedetailTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BikedetailTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikedetailTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
