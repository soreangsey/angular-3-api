import { Routes } from '@angular/router';

import { Home }
  from './features/home/home';

import { Login }
  from './features/login/login';

import { CoffeeList }
  from './features/api1/coffee-list/coffee-list';

import { CoffeeDetails }
  from './features/api1/coffee-details/coffee-details';

import { CharacterList }
  from './features/api2/character-list/character-list';

import { CharacterDetails }
  from './features/api2/character-details/character-details';

import { MovieList }
  from './features/api3/movie-list/movie-list';

import { MovieDetails }
  from './features/api3/movie-details/movie-details';

import {authGuard}
  from './core/guards/auth-guard';

import { coffeeResolver }
  from './core/resolvers/coffee-resolver';
import { Api1 } from './features/api1/api1';
import { Api2 } from './features/api2/api2';
import { Api3 } from './features/api3/api3';
import { MovieForm } from './features/api3/movie-form/movie-form';


export const routes: Routes = [

  {
    title: 'Home',
    path: '',
    component: Home
  },

  {
    title:'Login',
    path: 'login',
    component: Login
  },


  // API 1 - Coffee

  {
  path: 'coffee',
  component: Api1,
  canActivateChild: [authGuard],
  children: [

    {
      path: '',
      component: CoffeeList
    },

    {
      path: 'details/:id',
      component: CoffeeDetails,

      resolve: {
        coffee: coffeeResolver
      }
    }

  ]
},


  // API 2 - Characters

  {
    path: 'characters',

    children: [

      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },

      {
        path: 'list',
        component: CharacterList,
        canActivate:[authGuard]
      },

      {
        path: 'details/:id',
        component: CharacterDetails,
        canActivate:[authGuard]
      }

    ]
  },

  // API 3 - Movies

  {
    path: 'movies',
    component: Api3,
    canActivateChild:[authGuard],

    children: [

      {
        path: '',
      component: MovieList
      },
       {
      path: 'add',
      component: MovieForm,
      },

      {
        path: 'list',
        component: MovieList,
      },

      {
        path: 'details/:id',
        component: MovieDetails,
      }

    ]
  },


  {
    path: '**',
    redirectTo: ''
  }

];