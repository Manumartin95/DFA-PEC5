import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../models/film';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) { }


  getAllFilms(): Observable<Film[]>{
    return this.http.get<Film[]>('https://ghibliapi.herokuapp.com/films');
  }

  getFilmById(id: string | null): Observable<Film>{
    return this.http.get<Film>('https://ghibliapi.herokuapp.com/films/' + id);
  }
}
