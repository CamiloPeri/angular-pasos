import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(private dbz_service: DbzService) {}

  get characters(): Character[] {
    return this.dbz_service.characters;
  }

  onDeleteCharacter(id: string): void {
    this.dbz_service.deleteCharacterById(id);
  }

  addCharacter(character: Character): void {
    this.dbz_service.addCharacter(character);
  }
}
