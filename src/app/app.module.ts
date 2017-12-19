import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { TodolistComponent } from './todolist/todolist.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { JokeComponent } from './joke/joke.component';
import { TodolistService } from './todolist/todolist.service';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TodolistComponent,
    NavigationBarComponent,
    JokeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TodolistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
