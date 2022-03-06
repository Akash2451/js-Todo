import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { RightsidebarComponent } from './common/rightsidebar/rightsidebar.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TodolistComponent } from './home/todolist/todolist.component';
import { AddTodoComponent } from './home/add-todo/add-todo.component';
import { EditTodoComponent } from './home/edit-todo/edit-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    RightsidebarComponent,
    FooterComponent,
    HomeComponent,
    TodolistComponent,
    AddTodoComponent,
    EditTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
