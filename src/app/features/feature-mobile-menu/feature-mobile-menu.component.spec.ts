import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureMobileMenuComponent } from './feature-mobile-menu.component';

describe('FeatureMobileMenuComponent', () => {
  let component: FeatureMobileMenuComponent;
  let fixture: ComponentFixture<FeatureMobileMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureMobileMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureMobileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
