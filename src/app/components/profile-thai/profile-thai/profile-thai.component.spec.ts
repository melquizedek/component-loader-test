import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileThaiComponent } from './profile-thai.component';

describe('ProfileThaiComponent', () => {
  let component: ProfileThaiComponent;
  let fixture: ComponentFixture<ProfileThaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileThaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileThaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
