import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BoardModule } from './components/board/board.module';
import { PiecesModule } from './components/pieces/pieces.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BoardModule, PiecesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
