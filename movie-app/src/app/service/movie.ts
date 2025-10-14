import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  //#region Properties
  private movies: Movie[] = [

    {
      id: 1,
      title: 'OG',
      year: 2018,
      posterUrl: 'assets/og.avif',
      director: 'Prashanth Neel',
      description: 'A young man rises in the Kolar Gold Fields.',
      favorite: false
    },
    {
      id: 2,
      title: 'Kantara',
      year: 2022,
      posterUrl: 'assets/kantara.avif',
      director: 'Rishab Shetty',
      description: 'A story of tradition, forest, and valor.',
      favorite: false
    },
    {
      id: 3,
      title: 'Lokah',
      year: 2014,
      posterUrl: 'assets/lokah.avif',
      director: 'Prashanth Neel',
      description: 'A former gangster returns to protect his town.',
      favorite: false
    },
    {
      id: 4,
      title: 'Idli Kadai',
      year: 2023,
      posterUrl: 'assets/idli.avif',
      director: 'Ramesh',
      description: 'A heartwarming tale of friendship and street food.',
      favorite: false
    },

  ];
  //#endregion

  //#region Methods

  /**
   * @summary Provides all movies available in service.
   * @access public
   * @returns Movie[] - Array of movie objects.
   */

  public getMovies(): Movie[] {
    return [...this.movies];
  }
  //#endregion

  //#region Methods

  /**
   * @summary Finds and returns single movie matching the given id.
   * @access public
   * @param id - The ID of the movie to find.
   * @returns The movie object if found, otherwise, undefined.
   */
  getMovieById(id: number): Movie | undefined {
    return this.movies.find(m => m.id === id);
  }
  //#endregion

  //#region Methods

  /**
   * @summary Push the provided movie object to movies list.
   * @access public
   * @param movie - The movie object to add.
   * @returns void
   */

  public addMovie(movie: Movie) {
    this.movies.push(movie);
  }
  //#endregion
}
