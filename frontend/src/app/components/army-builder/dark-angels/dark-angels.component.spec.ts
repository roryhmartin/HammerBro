import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkAngelsComponent } from './dark-angels.component';

describe('DarkAngelsComponent', () => {
  let component: DarkAngelsComponent;
  let fixture: ComponentFixture<DarkAngelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DarkAngelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DarkAngelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
