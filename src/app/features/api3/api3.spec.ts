import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Api3 } from './api3';

describe('Api3', () => {
  let component: Api3;
  let fixture: ComponentFixture<Api3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Api3],
    }).compileComponents();

    fixture = TestBed.createComponent(Api3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
