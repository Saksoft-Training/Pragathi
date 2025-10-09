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

  constructor(private router: Router, private logger: LoggerService, private movieService: MovieService) {}

  addMovie() {
    if (!this.newMovie.title || !this.newMovie.year) return;

    const movie: Movie = {
      id: Date.now(),
      title: this.newMovie.title!.trim(),
      year: Number(this.newMovie.year),
      posterUrl: this.newMovie.posterUrl || 'https://via.placeholder.com/150x220?text=No+Image',
      director: this.newMovie.director || '',
      description: this.newMovie.description || '',
      genre: this.newMovie.genre || '',
      rating: this.newMovie.rating ?? 0,
      language: this.newMovie.language || '',
      duration: this.newMovie.duration ?? 0,
      releaseDate: this.newMovie.releaseDate || '',
      favorite: false
    };

    this.movieService.addMovie(movie);
    this.movieAdded.emit(movie);
    this.logger.log(`Added movie: ${movie.title}`);
    this.resetForm();
    this.router.navigate(['/movies']);

  }

  resetForm() {
    this.newMovie = { title: '', year: new Date().getFullYear(), posterUrl: '' };
  }

  


  
}
