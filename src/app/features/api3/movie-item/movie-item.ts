import { Component, input, output } from '@angular/core';

import { Movie } from '../../../core/models/movie';

@Component({
  selector: 'app-movie-item',
  imports: [],
  templateUrl: './movie-item.html',
  styleUrl: './movie-item.css',
})
export class MovieItem {

  movie = input.required<Movie>();

  details = output<number>();

  showDetails() {
    this.details.emit(this.movie().id);
  }
}

