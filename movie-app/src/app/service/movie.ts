import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  //#region Properties
  /**
   * @summary Stores movies in memory after loading from JSON.
   * @access private
   * @returns Array of Movie objects
   */
  private movies: Movie[] = [];
  /**
   * @summary Path to the local JSON file containing movies.
   * @access private
   */
  private movieJsonPath = 'assets/movie.json';
  //#endregion

  //#region Constructor
  /**
   * @summary Initializes the MovieService.
   * @access public
   * @param http - HttpClient to fetch movie data from JSON
   */
  public constructor(private http: HttpClient) { }
  //#endregion

  //#region Public Methods
  /**
   * @summary Loads movies from the JSON file if not already loaded.
   * Stores the movies in memory for future use.
   * @access public
   * @returns Observable<Movie[]> - Emits the loaded movies
   */
  public loadMovies(): Observable<Movie[]> {
    if (this.movies.length) {
      return new Observable<Movie[]>(observer => {
        observer.next(this.movies);
        observer.complete();
      });
    }
    return this.http.get<Movie[]>(this.movieJsonPath).pipe(
      tap(movies => this.movies = movies)
    );
  }
  /**
   * @summary Returns the list of movies stored in memory.
   * @access public
   * @returns Movie[] - Copy of movies array
   */
  public getMovies(): Movie[] {
    return [...this.movies];
  }
  /**
   * @summary Adds a new movie to the in-memory movie list.
   * @access public
   * @param movie - The Movie object to add
   * @returns void
   */
  public addMovie(movie: Movie): void {
    this.movies.push(movie);
  }
  /**
   * @summary Retrieves a movie by its ID.
   * @access public
   * @param id - The ID of the movie to retrieve
   * @returns Movie | undefined - The movie if found, otherwise undefined
   */
  public getMovieById(id: number): Movie | undefined {
    return this.movies.find(m => m.id === id);
  }
  //#endregion
}

