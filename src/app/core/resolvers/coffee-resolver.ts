import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

import { Coffee } from '../models/coffee';
import { CoffeeService } from '../services/coffee/coffee-service';

export const coffeeResolver: ResolveFn<Coffee> = (route) => {

  const coffeeService = inject(CoffeeService);

  const id = Number(route.paramMap.get('id'));

  return coffeeService.getById(id);
};