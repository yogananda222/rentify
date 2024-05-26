import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerRightsComponent } from './owner-rights.component';

describe('OwnerRightsComponent', () => {
  let component: OwnerRightsComponent;
  let fixture: ComponentFixture<OwnerRightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwnerRightsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OwnerRightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
