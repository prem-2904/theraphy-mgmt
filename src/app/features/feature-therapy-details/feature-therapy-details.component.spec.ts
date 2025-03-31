import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTherapyDetailsComponent } from './feature-therapy-details.component';

describe('FeatureTherapyDetailsComponent', () => {
  let component: FeatureTherapyDetailsComponent;
  let fixture: ComponentFixture<FeatureTherapyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureTherapyDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureTherapyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
