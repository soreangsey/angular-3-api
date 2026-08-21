import { Component, input, output } from '@angular/core';

import { Coffee } from '../../../core/models/coffee';


@Component({
  selector: 'app-coffee-item',
  imports: [],
  templateUrl: './coffee-item.html',
  styleUrl: './coffee-item.css',
})
export class CoffeeItem {

  coffee = input.required<Coffee>();

  details = output<number>();

  showDetails() {
    this.details.emit(this.coffee().id);
  }
}