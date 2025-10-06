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
  @Input() movie!: Movie;
  @Input() showDeleteButton: boolean = false; // only delete button left
  @Output() deleteMovie = new EventEmitter<number>();
  @Output() cardClick = new EventEmitter<number>(); // emit card click for navigation

  constructor(private logger: LoggerService) {}

  onCardClick() {
    this.logger.log(`${this.movie.title} card clicked`);
    this.cardClick.emit(this.movie.id); // navigate on parent side
  }

  onDeleteMovie() {
    this.logger.log(`Deleting movie ${this.movie.title}`);
    this.deleteMovie.emit(this.movie.id);
  }
}
