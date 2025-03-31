import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTherapistProfileComponent } from './feature-therapist-profile.component';

describe('FeatureTherapistProfileComponent', () => {
  let component: FeatureTherapistProfileComponent;
  let fixture: ComponentFixture<FeatureTherapistProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureTherapistProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureTherapistProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
