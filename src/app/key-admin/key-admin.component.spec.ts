import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyAdminComponent } from './key-admin.component';

describe('KeyAdminComponent', () => {
  let component: KeyAdminComponent;
  let fixture: ComponentFixture<KeyAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
