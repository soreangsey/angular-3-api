import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { Observable } from 'rxjs';

import { Movie } from '../../models/movie';

@Service()
export class MovieService {

  private httpClient = inject(HttpClient);

  private APIURL =
    'https://api.sampleapis.com/movies/comedy';

  movies = signal<Movie[]>([]);

  getAll(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.APIURL);
  }

  getById(id: number): Observable<Movie> {
    return this.httpClient.get<Movie>(`${this.APIURL}/${id}`);
  }

  addMovie(movie: Omit<Movie, 'id'>) {

    const maxId = Math.max(
      0,...this.movies().map(movie => movie.id)
    );

    const newMovie: Movie = {
      id: maxId + 1,
      ...movie
    };

    this.movies.update(
      movies => [...movies, newMovie]
    );

  }
}