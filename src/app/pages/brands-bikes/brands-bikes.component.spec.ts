import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsBikesComponent } from './brands-bikes.component';

describe('BrandsBikesComponent', () => {
  let component: BrandsBikesComponent;
  let fixture: ComponentFixture<BrandsBikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandsBikesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandsBikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
