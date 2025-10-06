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
  private movieService = inject(MovieService);
  movies: Movie[] = [];

  constructor(private logger: LoggerService, private router: Router) {
    this.loadMovies();
  }

  loadMovies() {
    this.movies = this.movieService.getMovies();
  }

  // ✅ Function to handle card click navigation
  onCardClick(id: number) {
    this.router.navigate(['/movies', id]);
  }

  onDeleteMovie(id: number) {
    this.movies = this.movies.filter(m => m.id !== id);
    this.logger.log(`Movie with ID ${id} deleted`);
  }
}
