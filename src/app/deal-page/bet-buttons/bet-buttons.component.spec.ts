import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetButtonsComponent } from './bet-buttons.component';

describe('BetButtonsComponent', () => {
  let component: BetButtonsComponent;
  let fixture: ComponentFixture<BetButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
