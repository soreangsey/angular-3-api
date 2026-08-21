import { Service, signal } from '@angular/core';

@Service()
export class AuthService {

  isLogged = signal<boolean>(
    localStorage.getItem('isLogged') === 'true'
  );

  login(email: string, password: string): boolean {

    if (
      email === 'admin@angular.com' &&
      password === '1234'
    ) {

      this.isLogged.set(true);

      localStorage.setItem(
        'isLogged',
        'true'
      );

      return true;
    }

    return false;
  }

  logout() {

    this.isLogged.set(false);

    localStorage.removeItem('isLogged');
  }
}