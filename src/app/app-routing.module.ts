import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmComponent } from './components/film/film.component';
import { FilmsComponent } from './components/films/films.component';

const routes: Routes = [
  {path: '', component: FilmsComponent},
  {path: 'film/:id', component: FilmComponent},
  {path: '**', component: FilmsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
