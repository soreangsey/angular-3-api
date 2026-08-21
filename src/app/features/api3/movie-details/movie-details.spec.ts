import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { MovieDetails } from './movie-details';
import { MovieService } from '../../../core/services/movie/movie-service';

describe('MovieDetails', () => {

  let component: MovieDetails;
  let fixture: ComponentFixture<MovieDetails>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [MovieDetails],

      providers: [

        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '1'
              }
            }
          }
        },

        {
          provide: MovieService,
          useValue: {
            getById: () =>
              of({
                id: 1,
                title: 'Movie Testing',
                posterURL: 'test.jpg',
                imdbId: 'IMDBID'
              })
          }
        }

      ]

    }).compileComponents();

    fixture = TestBed.createComponent(MovieDetails);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

});