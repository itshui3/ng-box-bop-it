import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CenterableObjectWrapperComponent } from './centerable-object-wrapper/centerable-object-wrapper.component';
import { PiecesModule } from '../pieces/pieces.module';

@NgModule({
  declarations: [CenterableObjectWrapperComponent],
  imports: [CommonModule, PiecesModule],
})
export class SupportersModule {}
