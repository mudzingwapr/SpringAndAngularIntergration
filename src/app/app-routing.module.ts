import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentAllComponent } from './student-all/student-all.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentEditComponent } from './student-edit/student-edit.component';

const routes: Routes = [
  {path:'findall',component:StudentAllComponent},
  {path:'save',component:StudentCreateComponent},
  {path:'edit',component:StudentEditComponent},
  //{path:'delete/:id':Component:},
  {path:'',redirectTo:'findall',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
