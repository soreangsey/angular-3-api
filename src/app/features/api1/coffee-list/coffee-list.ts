import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { Coffee } from '../../../core/models/coffee';
import { CoffeeService } from '../../../core/services/coffee/coffee-service';
import { CoffeeItem } from '../coffee-item/coffee-item';

@Component({
  selector: 'app-coffee-list',
  imports: [
    CoffeeItem,
],
  templateUrl: './coffee-list.html',
  styleUrl: './coffee-list.css',
})
export class CoffeeList implements OnInit {

  private coffeeService = inject(CoffeeService);
  private router = inject(Router);

  coffees = signal<Coffee[]>([]);

  ngOnInit() {
    this.getCoffees();
  }

  getCoffees() {
    this.coffeeService.getAll().subscribe({
      next: (res) => {
        this.coffees.set(res);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  goToDetails(id: number) {
    this.router.navigate([
      '/coffee',
      'details',
      id
    ]);
  }
}