import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormCharacterComponent } from './components/form-character/form-character.component';
import { ListCharacterComponent } from './components/list-character/list-character.component';
import { MainPageComponent } from './pages/main-page.component';

@NgModule({
  declarations: [
    MainPageComponent,
    ListCharacterComponent,
    FormCharacterComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [MainPageComponent],
})
export class DbzModule {}
