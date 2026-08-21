import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeItem } from './coffee-item';

describe('CoffeeItem', () => {

  let component: CoffeeItem;
  let fixture: ComponentFixture<CoffeeItem>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [CoffeeItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoffeeItem);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('coffee', {
      id: 1,
      title: 'Test Coffee',
      description: 'Test description',
      ingredients: ['Coffee', 'Water'],
      image: 'test.jpg'
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});