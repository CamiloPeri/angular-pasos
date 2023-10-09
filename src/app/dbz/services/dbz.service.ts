import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  constructor() {}

  public characters: Character[] = [
    { id: uuid(), name: 'Krillin', power: 5000 },
    { id: uuid(), name: 'Goku', power: 7000000 },
  ];

  public addCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uuid(),
      ...character,
    };
    this.characters.push(newCharacter);
  }

  public deleteCharacterById(id: string): void {
    // this.characters.splice(index, 1);

    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
