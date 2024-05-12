import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhrmacyComponent } from './phrmacy.component';

describe('PhrmacyComponent', () => {
  let component: PhrmacyComponent;
  let fixture: ComponentFixture<PhrmacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhrmacyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhrmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
