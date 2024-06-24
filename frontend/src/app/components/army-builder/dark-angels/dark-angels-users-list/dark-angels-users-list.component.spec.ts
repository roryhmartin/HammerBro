import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkAngelsUsersListComponent } from './dark-angels-users-list.component';

describe('DarkAngelsUsersListComponent', () => {
  let component: DarkAngelsUsersListComponent;
  let fixture: ComponentFixture<DarkAngelsUsersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DarkAngelsUsersListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DarkAngelsUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
