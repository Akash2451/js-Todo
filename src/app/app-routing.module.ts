import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './home/add-todo/add-todo.component';
import { EditTodoComponent } from './home/edit-todo/edit-todo.component';
import { HomeComponent } from './home/home.component';
import { TodolistComponent } from './home/todolist/todolist.component';

const routes: Routes = [
  {path:'', redirectTo:'home' , pathMatch:'full'},
  {path:'home', component:HomeComponent, children:[
    {path:'', redirectTo:'todolist', pathMatch:'full'},
    {path:'add', component:AddTodoComponent},
    {path:'edit/:index', component:EditTodoComponent},
    {path:'todolist', component:TodolistComponent},
    {path:'**', redirectTo:'todolist'}
  ]},
  {path:'**', redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
