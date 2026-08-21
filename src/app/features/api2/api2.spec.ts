import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Api2 } from './api2';

describe('Api2', () => {
  let component: Api2;
  let fixture: ComponentFixture<Api2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Api2],
    }).compileComponents();

    fixture = TestBed.createComponent(Api2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
