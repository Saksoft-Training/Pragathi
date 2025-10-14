import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Movie } from '../models/movie';
import { LoggerService } from '../service/logger';
import { MovieService } from '../service/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-movie-component.html',
  styleUrls: ['./add-movie-component.scss'],
  providers: [LoggerService]
})
export class AddMovieComponent {
  @Output() movieAdded = new EventEmitter<Movie>();

  newMovie: Partial<Movie> = {
    title: '',
    year: new Date().getFullYear(),
    posterUrl: ''
  };

  //#region constructor
  constructor(private router: Router, private logger: LoggerService, private movieService: MovieService) { }
  //#endregion

  //#region addMovie
  /**
   * Adds a new movie to the collection.
   * @summary creates movie object from the form input,saves it,emits an event, logs action and navigates to movie page.
   * @access public
   * @returns void
   */

  public addMovie(): void {
    if (!this.newMovie.title || !this.newMovie.year) return;

    const movie: Movie = {
      description: this.newMovie.description || '',
      director: this.newMovie.director || '',
      duration: this.newMovie.duration ?? 0,
      favorite: false,
      genre: this.newMovie.genre || '',
      id: Date.now(),
      language: this.newMovie.language || '',
      posterUrl: this.newMovie.posterUrl || 'https://via.placeholder.com/150x220?text=No+Image',
      rating: this.newMovie.rating ?? 0,
      releaseDate: this.newMovie.releaseDate || '',
      title: this.newMovie.title!.trim(),
      year: Number(this.newMovie.year),

    };

    this.movieService.addMovie(movie);
    this.movieAdded.emit(movie);
    this.logger.log(`Added movie: ${movie.title}`);
    this.resetForm();
    this.router.navigate(['/movies']);

  }
  //#endregion

  //#region resetForm

  /**
   * Resets the movie form to default empty values.
   * @summary clears the newMovie object to initial state.
   * @access public
   * @returns void
   */

  public resetForm(): void {
    this.newMovie = { description: '', director: '', duration: 0, favorite: false, genre: '', id: 0, language: '', posterUrl: '', rating: 0, releaseDate: '', title: '', year: new Date().getFullYear() };
  }

  //#endregion
}
