import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../models/movie';
import { LoggerService } from '../service/logger';
import { HighlightMovieDirective } from '../directives/highlight-movie';

@Component({
  selector: 'app-movie-card-component',
  standalone: true,
  imports: [CommonModule, HighlightMovieDirective],
  templateUrl: './movie-card-component.html',
  styleUrls: ['./movie-card-component.scss'],
  providers: [LoggerService]
})
export class MovieCardComponent {
  //#region Properties
  @Input() movie!: Movie;
  @Input() showDeleteButton: boolean = false; // only delete button left
  @Output() deleteMovie = new EventEmitter<number>();
  @Output() cardClick = new EventEmitter<number>(); // emit card click for navigation
  //#endregion  


  //#region Constructor
  /**
   * Initializes the MovieCard component.
   * @summary Injects LoggerService to log user interactions with movie card.
   * @access public
   * @param logger-Service for logging actions.
   */

  public constructor(private logger: LoggerService) { }
  //#endregion

  //#region Event Handlers
  /**
   * Handles click event on the movie card.
   * @summary Logs the click and emits the cardClick event with movie ID.
   * @access public
   * @returns void
   */

  onCardClick(): void {
    this.logger.log(`${this.movie.title} card clicked`);
    this.cardClick.emit(this.movie.id); // navigate on parent side
  }
  //#endregion

  //#region Event Handlers
  /**
   * Handles the deletion of the movie.
   * @summary Logs the deletion and emits the deleteMovie event with movie ID.
   * @access public
   * @returns void  
   */

  public onDeleteMovie(): void {
    this.logger.log(`Deleting movie ${this.movie.title}`);
    this.deleteMovie.emit(this.movie.id);
  }
  //#endregion
}
