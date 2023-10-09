import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list-character',
  templateUrl: './list-character.component.html',
  styleUrls: ['./list-character.component.css'],
})
export class ListCharacterComponent {
  @Input()
  public characterList: Character[] = [{ name: 'Trunks', power: 100 }];

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  public emitDeleteCharacter(id?: string): void {
    if (!id) return;
    this.onDeleteCharacter.emit(id);
  }
}
