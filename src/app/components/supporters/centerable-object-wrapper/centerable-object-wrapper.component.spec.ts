import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterableObjectWrapperComponent } from './centerable-object-wrapper.component';

describe('CenterableObjectWrapperComponent', () => {
  let component: CenterableObjectWrapperComponent;
  let fixture: ComponentFixture<CenterableObjectWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterableObjectWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenterableObjectWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
