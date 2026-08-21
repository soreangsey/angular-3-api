import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { Character } from '../../models/character';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private apiUrl =
    'https://api.sampleapis.com/futurama/characters';


  constructor(
    private http: HttpClient
  ) {}


  getAll(): Observable<Character[]> {

    return this.http.get<Character[]>(
      this.apiUrl
    );

  }


  getById(id: number):
    Observable<Character | undefined> {

    return this.getAll().pipe(

      map(characters =>
        characters.find(
          character => character.id === id
        )
      )

    );

  }

}