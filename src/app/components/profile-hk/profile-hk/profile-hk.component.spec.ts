import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileHkComponent } from './profile-hk.component';

describe('ProfileHkComponent', () => {
  let component: ProfileHkComponent;
  let fixture: ComponentFixture<ProfileHkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileHkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileHkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
