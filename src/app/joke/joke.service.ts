import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class JokeService {

  private url = 'https://icanhazdadjoke.com/';

  constructor(private httpClient: HttpClient) { }

  getJoke(): Observable<string> {
    return this.httpClient.get(this.url, {
      headers: new HttpHeaders().append('Accept', 'application/json')
    }).map((response) => {
      console.log(response);
      return response['joke'];
    });
  }

}
