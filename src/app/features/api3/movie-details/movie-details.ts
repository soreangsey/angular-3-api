import {
  Component,
  inject,
  OnInit,
  signal
} from '@angular/core';

import {
  ActivatedRoute,
  RouterLink
} from '@angular/router';

import { Movie } from '../../../core/models/movie';
import { MovieService } from '../../../core/services/movie/movie-service';

@Component({
  selector: 'app-movie-details',
  imports: [
    RouterLink
  ],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.css',
})
export class MovieDetails implements OnInit {

  private activatedRoute = inject(ActivatedRoute);
  private movieService = inject(MovieService);

  movie = signal<Movie | null>(null);

  ngOnInit() {

    const id =
      Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.movieService.getById(id).subscribe({
      next: (res) => {
        this.movie.set(res);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}