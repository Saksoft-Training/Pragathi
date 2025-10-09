import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { MovieListComponent } from './movie-list-component/movie-list-component';
import { MovieDetailComponent } from './movie-detail-component/movie-detail-component';
import { AboutComponent } from './about-component/about-component';
import { AddMovieComponent } from './add-movie-component/add-movie-component';
import { PageNotFound } from './page-not-found/page-not-found';
import { DemoHttp } from './demo-http/demo-http';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/:id', component: MovieDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: 'add-movie', component: AddMovieComponent },
  { path: 'demo-http', component: DemoHttp },

  { path: '**', component: PageNotFound }
];
