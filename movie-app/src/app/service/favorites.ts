import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable()
export class FavoritesService {
  private fav = new Set<number>();

  toggleFavorite(movie: Movie) {
    if (this.fav.has(movie.id)) this.fav.delete(movie.id);
    else this.fav.add(movie.id);
    movie.favorite = this.fav.has(movie.id);
  }

  isFavorite(id: number) {
    return this.fav.has(id);
  }
}
