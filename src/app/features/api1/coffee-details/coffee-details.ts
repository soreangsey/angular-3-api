import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { Coffee } from '../../../core/models/coffee';

@Component({
  selector: 'app-coffee-details',
  imports: [
    RouterLink
  ],
  templateUrl: './coffee-details.html',
  styleUrl: './coffee-details.css',
})
export class CoffeeDetails {

  private activatedRoute = inject(ActivatedRoute);

  coffee: Coffee =
    this.activatedRoute.snapshot.data['coffee'] as Coffee;
}