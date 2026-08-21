import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Api1 } from './api1';

describe('Api1', () => {
  let component: Api1;
  let fixture: ComponentFixture<Api1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Api1],
    }).compileComponents();

    fixture = TestBed.createComponent(Api1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
