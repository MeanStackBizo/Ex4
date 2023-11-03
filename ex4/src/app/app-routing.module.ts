import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonnagesFormatesComponent } from './personnages-formates/personnages-formates.component';

const routes: Routes = [
  {
    path:"",component:PersonnagesFormatesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
