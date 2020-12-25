import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardCardComponent } from './keyboard-card.component';

describe('KeyboardCardComponent', () => {
  let component: KeyboardCardComponent;
  let fixture: ComponentFixture<KeyboardCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyboardCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyboardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
