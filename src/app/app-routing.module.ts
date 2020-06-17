import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadosComponent } from './empleados/empleados.component';
import { AcercadeComponent } from './acercade/acercade.component';



const routes: Routes = [
  {
    path:'empleados',
    component:EmpleadosComponent
  },
  {
    path:'acercade',
    component:AcercadeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
