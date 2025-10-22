import { Component, OnInit } from '@angular/core';
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
  // styleUrls: ['./movie-list-component.scss'],
  providers: [LoggerService]
})
export class MovieListComponent implements OnInit {
  //#region Properties
  /**
   * @summary List of all movies displayed in the component.
   * @access public
   * @returns Array of Movie objects
   */
  movies: Movie[] = [];
  //#endregion

  //#region Constructor
  /**
   * @summary Initializes the MovieListComponent.
   * @access public
   * @param movieService - Service for fetching and managing movies
   * @param router - Router service for navigation
   * @param logger - LoggerService to log user actions
   */
  public constructor(
    private movieService: MovieService,
    private router: Router,
    private logger: LoggerService
  ) { }
  //#endregion

  //#region Lifecycle Hooks
  /**
   * @summary Angular lifecycle hook called after component initialization.
   * Loads movies from the service.
   * @access public
   * @returns void
   */
  public ngOnInit(): void {
    this.loadMovies();
  }
  //#endregion

  //#region Private Methods
  /**
   * @summary Loads movies from the movie service.
   * @access private
   * @returns void
   */
  private loadMovies(): void {
    this.movieService.loadMovies().subscribe({
      next: () => this.refreshMovies(),
      error: err => console.error(err)
    });
  }
  /**
   * @summary Refreshes the movies list from the movie service.
   * @access private
   * @returns void
   */
  private refreshMovies(): void {
    this.movies = this.movieService.getMovies();
  }
  //#endregion
  
  //#region Public Methods
  /**
   * @summary Adds a new movie and refreshes the movies list.
   * @access public
   * @param newMovie - The movie object to add
   * @returns void
   */
  public onAddMovie(newMovie: Movie): void {
    this.movieService.addMovie(newMovie);
    this.refreshMovies();
  }
  /**
   * @summary Handles click on a movie card and navigates to its details page.
   * @access public
   * @param id - The ID of the movie clicked
   * @returns void
   */
  public onCardClick(id: number): void {
    this.router.navigate(['/movies', id]);
  }
  /**
   * @summary Deletes a movie from the list and logs the action.
   * @access public
   * @param id - The ID of the movie to delete
   * @returns void
   */
  public onDeleteMovie(id: number): void {
    this.movies = this.movies.filter(m => m.id !== id);
    this.logger.log(`Movie with ID ${id} deleted`);
  }
  //#endregion
}
 
 