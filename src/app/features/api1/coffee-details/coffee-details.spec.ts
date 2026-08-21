import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { CoffeeDetails } from './coffee-details';

describe('CoffeeDetails', () => {
  let component: CoffeeDetails;
  let fixture: ComponentFixture<CoffeeDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoffeeDetails],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {
                coffee: {
                  id: 1,
                  title: 'Test Coffee',
                  description: 'Test description',
                  ingredients: ['Coffee', 'Water'],
                  image: 'test.jpg'
                }
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CoffeeDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
