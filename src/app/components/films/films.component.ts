import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films: Film[] = [];

  constructor(private filmsService: FilmsService) { }

  ngOnInit(): void {
    this.filmsService.getAllFilms()
    .subscribe((films) => this.films = films);
  }
}
