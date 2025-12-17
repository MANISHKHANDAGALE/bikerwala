import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeTabsComponent } from './bike-tabs.component';

describe('BikeTabsComponent', () => {
  let component: BikeTabsComponent;
  let fixture: ComponentFixture<BikeTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BikeTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
