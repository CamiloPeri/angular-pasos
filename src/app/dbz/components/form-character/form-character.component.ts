import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-form-character',
  templateUrl: './form-character.component.html',
  styleUrls: ['./form-character.component.css'],
})
export class FormCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();
  public character: Character = { name: '', power: 0 };

  public emitCharacter(): void {
    if (this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power: 0 };
  }
}
