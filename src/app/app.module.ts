import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BoardModule } from './components/board/board.module';
import { PiecesModule } from './components/pieces/pieces.module';
import { SupportersModule } from './components/supporters/supporters.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BoardModule,
    PiecesModule,
    SupportersModule,
  ],
  providers: [ActivatedRoute],
  bootstrap: [AppComponent],
})
export class AppModule {}
