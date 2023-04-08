import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadBlockComponent } from './dead-block.component';

describe('DeadBlockComponent', () => {
  let component: DeadBlockComponent;
  let fixture: ComponentFixture<DeadBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeadBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeadBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
