import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDAtaComponent } from './user-data.component';

describe('UserDAtaComponent', () => {
  let component: UserDAtaComponent;
  let fixture: ComponentFixture<UserDAtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDAtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDAtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
