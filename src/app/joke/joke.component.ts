import { JokeService } from './joke.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  joke = '';

  constructor(private jokeService: JokeService) { }

  ngOnInit() {
    this.jokeService.getJoke()
      .subscribe((joke) => this.joke = joke);
  }

}
