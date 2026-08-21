import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieItem } from './movie-item';

describe('MovieItem', () => {
  let component: MovieItem;
  let fixture: ComponentFixture<MovieItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieItem],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieItem);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('movie', {
      id: 1,
      title: 'Movie Testing',
      posterURL: 'test.jpg',
      imdbId: 'IMDBID'
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});