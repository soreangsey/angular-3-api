import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';

import { Movie } from '../../../core/models/movie';
import { MovieService } from '../../../core/services/movie/movie-service';
import { MovieItem } from '../movie-item/movie-item';

@Component({
  selector: 'app-movie-list',
  imports: [
    MovieItem
  ],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList implements OnInit {

  private movieService = inject(MovieService);
  private router = inject(Router);

  movies = signal<Movie[]>([]);

  ngOnInit() {
    this.movieService.getAll().subscribe({
      next: (res) => {
        this.movies.set(res);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  goToDetails(id: number) {
    this.router.navigate([
      '/movies',
      'details',
      id
    ]);
  }

    goToAdd() {
    this.router.navigate([
      '/movies',
      'add'
    ]);
  }
}