import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavioComponent } from './navio/navio.component';

import { NavioService } from './navio.service';
import { EventoComponent } from './evento/evento.component';
import { EscalasComponent } from './escalas/escalas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavioComponent,
    EventoComponent,
    EscalasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [NavioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
