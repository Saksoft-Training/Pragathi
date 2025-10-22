import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable()
export class FavoritesService {
  //#region Properties
  private favorites = new Set<number>();
  //#endregion

  //#region Methods
  /**
   * Toggles the favorite status of a movie.
   * @summary If the movie is already a favorite, it removes it from favorites; otherwise, it adds it. Updates the movie's favorite property accordingly.
   * @access public
   * @param movie - The movie to toggle.
   * @returns void
   */
  public toggleFavorite(movie: Movie): void {
    if (this.favorites.has(movie.id)) this.favorites.delete(movie.id);
    else this.favorites.add(movie.id);
    movie.favorite = this.favorites.has(movie.id);
  }
  //#endregion

  //#region Methods
  /**
   * Checks if a movie is marked as favorite.
   * @summary Returns true if the movie ID exists in the favorites set; otherwise, returns false.
   * @access public
   * @param id - The ID of the movie to check.
   * @returns True if the movie is a favorite; otherwise, false.
   */
  public isFavorite(id: number): boolean {
    return this.favorites.has(id);
  }
  //#endregion
}
