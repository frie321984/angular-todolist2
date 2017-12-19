import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class JokeService {

  private url = 'https://api.chucknorris.io/jokes/random';

  constructor(private httpClient: HttpClient) { }

  getJoke(): Observable<string> {
    return this.httpClient.get(this.url).map((response) => response['value']);
  }

}
