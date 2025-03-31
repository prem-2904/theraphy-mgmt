import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureFooterComponent } from './feature-footer.component';

describe('FeatureFooterComponent', () => {
  let component: FeatureFooterComponent;
  let fixture: ComponentFixture<FeatureFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
