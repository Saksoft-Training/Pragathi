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
  recommended: Movie[] = [];

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit() {
    this.recommended = this.movieService.getMovies().slice(0, 8);
  }

  goToDetails(id: number) {
    this.router.navigate(['/movies', id]);
  }
}
