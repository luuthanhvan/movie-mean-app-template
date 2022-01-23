import { Injectable } from "@angular/core";
import { Movie } from "../../interfaces/movie";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  movies: Movie[] = [
    {
      movieName: "The Snowdrop",
      movieDuration: "27 eps",
      releaseDate: "18/12/2021",
      cast: ["Kim Jisoo", "Jung Hae In"],
      posterImg: '/assets/movie_posters/the_snowdrop.jpg',
    },
    {
      movieName: "The Snowdrop",
      movieDuration: "27 eps",
      releaseDate: "18/12/2021",
      cast: ["Kim Jisoo", "Jung Hae In"],
      posterImg: '/assets/movie_posters/the_snowdrop.jpg',
    },
    {
      movieName: "The Snowdrop",
      movieDuration: "27 eps",
      releaseDate: "18/12/2021",
      cast: ["Kim Jisoo", "Jung Hae In"],
      posterImg: '/assets/movie_posters/the_snowdrop.jpg',
    },
  ];

  constructor() {}

  public getMovies() : Movie[] {
    return this.movies;
  }
}
