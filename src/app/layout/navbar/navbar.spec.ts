import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Navbar } from './navbar';
import { AuthService } from '../../core/services/auth/auth-service';

describe('Navbar', () => {

  let component: Navbar;
  let fixture: ComponentFixture<Navbar>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [Navbar],

      providers: [
        provideRouter([]),
        AuthService
      ]

    }).compileComponents();

    fixture = TestBed.createComponent(Navbar);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});