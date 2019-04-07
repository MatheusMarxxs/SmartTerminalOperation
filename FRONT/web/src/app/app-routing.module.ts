import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavioComponent } from './navio/navio.component';
import { EventoComponent } from './evento/evento.component';
import { ImpactosComponent } from './impactos/impactos.component';


const routes: Routes = [
  { 
    path: '',
    component: NavioComponent
  },
  { 
    path: 'evento',
    component: EventoComponent
  },
  {
    path: 'impacto',
    component: ImpactosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
