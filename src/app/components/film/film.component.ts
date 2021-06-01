import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from 'src/app/models/film';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  film!: Film;

  constructor(
    private filmsService: FilmsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');

    this.filmsService.getFilmById(identifier)
    .subscribe((film) => {
      if(!film){
        return this.router.navigateByUrl('/');
      }

      this.film = film;
      console.log('Film ---> ', this.film);
    });

  }
}
