import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Movie } from '../models/movie';
import { MovieService } from '../service/movie';
import { LoggerService } from '../service/logger';
import { MovieCardComponent } from '../movie-card-component/movie-card-component';
@Component({
  selector: 'app-movie-list-component',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './movie-list-component.html',
  styleUrls: ['./movie-list-component.scss'],
  providers: [LoggerService]
})
export class MovieListComponent {
  //#region Properties
  private movieService = inject(MovieService);
  movies: Movie[] = [];
  //#endregion

  //#region Constructor
  /**
   * @summary Injects LoggerService for logging, Router for navigation, and DemoService, then loads the movies from  moviesService.
   * @access public
   * @param logger - Service for logging actions.
   * @param router - Router for navigation.
   * @param demoService - Demo service instance.
   */

  public constructor(private logger: LoggerService, private router: Router) {
    this.loadMovies();
  }
  //#endregion

  //#region Methods

  /**
   * @summary Fetches all movies and stores them in movies array.
   * @access public
   * @returns void
   */

  public loadMovies(): void {
    this.movies = this.movieService.getMovies();
  }
  //#endregion

  //#region Event Handlers

  /**
   * @summary Navigates to the details page for the selected movie ID.
   * @access public
   * @param id - The ID of the movie clicked.
   * @returns void
   */

  public onCardClick(id: number): void {
    this.router.navigate(['/movies', id]);
  }
  //#endregion

  //#region Event Handlers

  /**
   * @summary Deletes a movie from the list.
   * @access public
   * @param id - The ID of the movie to delete.
   * @returns void
   */

  public onDeleteMovie(id: number): void {
    this.movies = this.movies.filter(m => m.id !== id);
    this.logger.log(`Movie with ID ${id} deleted`);
  }

  //#endregion
}
