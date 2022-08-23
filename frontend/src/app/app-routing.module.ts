import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { ReadComponent} from './read/read.component';
import { QuestionComponent} from './question/question.component'
import { AdminComponent } from './admin/admin.component';
import { GardGuard } from './gard.guard';



const routes: Routes = [
  {path:'create' , component:CreateComponent},
  {path:'create/:id' , component:CreateComponent},
  {path:'read' , component:ReadComponent , canActivate:[GardGuard]},
  {path:'evaluation' ,component:EvaluationComponent},
  { path : "home" , component:QuestionComponent},
  {path:"admin" ,component:AdminComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
