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
  styleUrls: ['./home-component.scss']
})
export class HomeComponent implements OnInit {
  //#region Properties
  recommended: Movie[] = [];
  //#endregion

  //region Constructor
  /**
   * Initializes the Home component.
   * @summary Injects MovieService to fetch the movies and router for navigation.
   * @access public
   * @param movieService - Service to manage movie data.
   * @param router - Router for navigation.
   */

  public constructor(private movieService: MovieService, private router: Router) { }

  //endregion

  //#region lifecycle hooks
  /**
   * Angular lifecycle hook called on component initialization.
   * @summary Fetches recommended 4 movies from the MovieService and stores them in recommended.
   * @access public
   * @returns void
   */

  public ngOnInit(): void {
    this.recommended = this.movieService.getMovies().slice(0, 4);
  }
  //#endregion

  //#region Navigation

  /**
   * Navigates to the movie details page for given movie ID.
   * @access public
   * @param id - The ID of the movie to view details.
   * @returns void
   */

  public goToDetails(id: number): void {
    this.router.navigate(['/movies', id]);
  }
  //#endregion
}
