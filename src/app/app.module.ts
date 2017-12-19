import { Http } from '@angular/http';
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
import { JokeService } from './joke/joke.service';
import { HttpClientModule } from '@angular/common/http';
import { InputAutoWidthDirective } from './todolist/input-auto-width.directive';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TodolistComponent,
    NavigationBarComponent,
    JokeComponent,
    NotFoundComponent,
    InputAutoWidthDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TodolistService, JokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
