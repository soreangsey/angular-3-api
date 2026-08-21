import { Component, inject } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { Router } from '@angular/router';

import { MovieService }
  from '../../../core/services/movie/movie-service';

@Component({
  selector: 'app-movie-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './movie-form.html',
  styleUrl: './movie-form.css',
})
export class MovieForm {

  private fb = inject(FormBuilder);
  private movieService = inject(MovieService);
  private router = inject(Router);

  movieForm: FormGroup;


  constructor() {

    this.movieForm = this.fb.group({

      title: [
        '',
        Validators.required
      ],

      posterURL: [
        '',
        Validators.required
      ],

      imdbId: [
        '',
        Validators.required
      ]

    });

  }


  addMovie() {

    if (this.movieForm.invalid) {

      this.movieForm.markAllAsTouched();

      return;
    }

    this.movieService.addMovie(
      this.movieForm.value
    );

    this.router.navigate([
      '/movies/list'
    ]);

  }
}