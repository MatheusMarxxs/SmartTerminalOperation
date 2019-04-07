import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavioComponent } from './navio/navio.component';
<<<<<<< HEAD
import { EscalasComponent } from './escalas/escalas.component';
=======
import { EventoComponent } from './evento/evento.component';
>>>>>>> 972147c86e1fea1f46ca60867b61c8a4026b4e6c


const routes: Routes = [
  { 
    path: 'navio',
    component: NavioComponent
  },
<<<<<<< HEAD
  {
    path: 'escalas',
    component: EscalasComponent
=======
  { 
    path: 'evento',
    component: EventoComponent
>>>>>>> 972147c86e1fea1f46ca60867b61c8a4026b4e6c
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
