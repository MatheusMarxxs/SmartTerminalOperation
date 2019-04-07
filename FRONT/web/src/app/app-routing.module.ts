import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavioComponent } from './navio/navio.component';
import { EscalasComponent } from './escalas/escalas.component';


const routes: Routes = [
  { 
    path: 'navio',
    component: NavioComponent
  },
  {
    path: 'escalas',
    component: EscalasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
