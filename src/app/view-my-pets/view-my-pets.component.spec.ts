import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyPetsComponent } from './view-my-pets.component';

describe('ViewMyPetsComponent', () => {
  let component: ViewMyPetsComponent;
  let fixture: ComponentFixture<ViewMyPetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMyPetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMyPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
