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
  styleUrls: ['./movie-detail-component.scss'],
  providers: [LoggerService]
})
export class MovieDetailComponent implements OnInit {
  @Input() movie?: Movie; // inline mode
  @Output() favorite = new EventEmitter<Movie>();
  localMovie?: Movie;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private favSvc: FavoritesService,
    private logger: LoggerService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(pm => {
      const id = pm.get('id');
      if (id) this.localMovie = this.movieService.getMovieById(+id);
    });
  }

  get current() {
    return this.movie ?? this.localMovie;
  }

  toggleFavorite() {
    const m = this.current;
    if (!m) return;
    this.favSvc.toggleFavorite(m);
    this.logger.log(`Toggled favorite for ${m.title}`);
    this.favorite.emit(m);
  }
}
