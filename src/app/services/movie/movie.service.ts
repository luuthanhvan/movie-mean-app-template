import { Injectable } from "@angular/core";
import { Movie } from "../../interfaces/movie";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export const genres: string[] = [
  "Action",
  "Animation",
  "Comedy",
  "Crime",
  "Drama",
  "Experimental",
  "Fantasy",
  "Historical",
  "Horror",
  "Romance",
  "Science Fiction",
  "Thriller",
  "Western",
  "Other",
];
@Injectable({
  providedIn: "root",
})
export class MovieService {
  movies: Movie[] = [
    {
      movieName: "The Snowdrop",
      genre: "",
      runningTime: "27 eps",
      releaseDate: "18/12/2021",
      cast: ["Kim Jisoo", "Jung Hae In"],
      director: "",
      status: "",
      posterImg: "/assets/movie_posters/the_snowdrop.jpg",
    },
    {
      movieName: "The Snowdrop",
      genre: "",
      runningTime: "27 eps",
      releaseDate: "18/12/2021",
      cast: ["Kim Jisoo", "Jung Hae In"],
      director: "",
      status: "",
      posterImg: "/assets/movie_posters/the_snowdrop.jpg",
    },
    {
      movieName: "The Snowdrop",
      genre: "",
      runningTime: "27 eps",
      releaseDate: "18/12/2021",
      cast: ["Kim Jisoo", "Jung Hae In"],
      director: "",
      status: "",
      posterImg: "/assets/movie_posters/the_snowdrop.jpg",
    },
  ];

  baseUrl: string = "http://localhost:5000";

  // injection
  constructor(private httpClient: HttpClient) {}

  public addMovie(movie: Movie): Observable<void> {
    // return Observable response: Data stream
    return this.httpClient.post<void>(`${this.baseUrl}/movies`, movie);
  }

  public getMovies(): Observable<Movie[]> {
    return this.httpClient
      .get<Movie[]>(`${this.baseUrl}/movies`) // get data
      .pipe(map((res) => res["data"]));
  }
}
