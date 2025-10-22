import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movie';
import { MovieService } from '../service/movie';
import { FavoritesService } from '../service/favorites';
import { LoggerService } from '../service/logger';

@Component({
  selector: 'app-movie-detail-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-detail-component.html',
  // styleUrls: ['./movie-detail-component.scss'],
  providers: [LoggerService]
})
export class MovieDetailComponent implements OnInit {
  //#region Properties
  @Input() movie?: Movie; // inline mode
  @Output() favorite = new EventEmitter<Movie>();
  localMovie?: Movie;
  //#endregion

  //#region Constructor
  /**
   * Initializes the MovieDetail component.
   * @access public
   * @summary Injects ActivatedRoute to access route parameters, MovieService to fetch movie data, FavoritesService to manage favorite movies, and LoggerService to log actions.
   * @param route - ActivatedRoute to access route parameters.
   * @param movieService - Services to fetch movie data.
   * @param favSvc - Service to manage favorite movie.
   * @param logger - logger service to log actions.
   */
  public constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private favSvc: FavoritesService,
    private logger: LoggerService
  ) { }
  //#endregion

  //#region Lifecycle Hooks
  /**
   * @summary - subscribe to route parameter to fetch the movie id and if not provided as input
   * @access public
   * @returns void
   */
  public ngOnInit(): void {
    this.route.paramMap.subscribe(pm => {
      const id = pm.get('id');
      if (id) this.localMovie = this.movieService.getMovieById(+id);
    });
  }
  //#endregion

  //#region Getters
  /**
   * Gets the current movie to display
   * @summary - returns the input movie if available, otherwise uses the locally fetched movie
   * @access public
   * @returns Movie | undefined
   */
  public get current(): Movie | undefined {
    return this.movie ?? this.localMovie;
  }
  //#endregion
  
  //#region Event Handlers
  /**
   * Toggles the favorite status of the current movie
   * @summary - uses FavoritesService to toggle favorite status, logs the action, and emits the favorite event
   * @access public
   * @returns void
   */
  public toggleFavorite(): void {
    const selectedMovie = this.current;
    if (!selectedMovie) return;
    this.favSvc.toggleFavorite(selectedMovie);
    this.logger.log(`Toggled favorite for ${selectedMovie.title}`);
    this.favorite.emit(selectedMovie);
  }
  //#endregion
}
 
 