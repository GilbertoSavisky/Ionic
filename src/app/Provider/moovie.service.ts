import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoovieService {

  private baseApiPath = 'https://api.themoviedb.org/3'
  constructor(private http: HttpClient) { }

  getLatesMovies() {
    return this.http.get(this.baseApiPath + '/movie/popular?api_key='+ this.getKey());
  }

  getKey(): string {
    return '92992b987149a7c4b23e734c29c8f618';
  }
}
