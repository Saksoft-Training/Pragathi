import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MovieService } from '../service/movie';
import { MovieCardComponent } from '../movie-card-component/movie-card-component';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './home-component.html',
  // styleUrls: ['./home-component.scss']
})
export class HomeComponent implements OnInit {
  //#region Properties
  /**
   * @summary List of recommended movies displayed on the home page.
   * @access public
   * @returns Array of Movie objects
   */
  recommended: Movie[] = [];
  //#endregion

  //#region Constructor
  /**
   * @summary Initializes the HomeComponent.
   * @access public
   * @param movieService - Service for fetching and managing movies
   * @param router - Router service for navigation
   */
  public constructor(private movieService: MovieService, private router: Router) { }
  //#endregion

  //#region Lifecycle Hooks
  /**
   * @summary Angular lifecycle hook called after component initialization.
   * Loads movies from the service and refreshes recommended list.
   * @access public
   * @returns void
   */
  public ngOnInit(): void {
    this.movieService.loadMovies().subscribe({
      next: () => this.refreshRecommended(),
      error: err => console.error(err)
    });
  }
  //#endregion

  //#region Methods
  /**
   * @summary Refreshes the list of recommended movies.
   * Takes the first 4 movies from the movie service.
   * @access private
   * @returns void
   */
  private refreshRecommended(): void {
    this.recommended = this.movieService.getMovies().slice(0, 4);
  }
  /**
   * @summary Adds a new movie to the movie service and updates recommended movies.
   * @access public
   * @param newMovie - The movie object to be added
   * @returns void
   */
  public addMovie(newMovie: Movie): void {
    this.movieService.addMovie(newMovie);
    this.refreshRecommended(); // immediately update recommended list
  }
  /**
   * @summary Navigates to the details page of a movie by its ID.
   * @access public
   * @param id - The ID of the movie to navigate to
   * @returns void
   */
  public goToDetails(id: number): void {
    this.router.navigate(['/movies', id]);
  }
  //#endregion
}

