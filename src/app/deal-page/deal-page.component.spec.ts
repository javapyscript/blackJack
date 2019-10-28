import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealPageComponent } from './deal-page.component';

describe('DealPageComponent', () => {
  let component: DealPageComponent;
  let fixture: ComponentFixture<DealPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
