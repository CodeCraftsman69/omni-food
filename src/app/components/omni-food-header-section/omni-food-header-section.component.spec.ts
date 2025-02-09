import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmniFoodHeaderSectionComponent } from './omni-food-header-section.component';

describe('OmniFoodHeaderSectionComponent', () => {
  let component: OmniFoodHeaderSectionComponent;
  let fixture: ComponentFixture<OmniFoodHeaderSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OmniFoodHeaderSectionComponent]
    });
    fixture = TestBed.createComponent(OmniFoodHeaderSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
