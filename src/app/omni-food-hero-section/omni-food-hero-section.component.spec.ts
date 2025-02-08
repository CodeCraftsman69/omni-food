import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmniFoodHeroSectionComponent } from './omni-food-hero-section.component';

describe('OmniFoodHeroSectionComponent', () => {
  let component: OmniFoodHeroSectionComponent;
  let fixture: ComponentFixture<OmniFoodHeroSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OmniFoodHeroSectionComponent]
    });
    fixture = TestBed.createComponent(OmniFoodHeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
