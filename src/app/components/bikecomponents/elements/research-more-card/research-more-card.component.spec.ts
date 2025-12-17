import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchMoreCardComponent } from './research-more-card.component';

describe('ResearchMoreCardComponent', () => {
  let component: ResearchMoreCardComponent;
  let fixture: ComponentFixture<ResearchMoreCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchMoreCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchMoreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
