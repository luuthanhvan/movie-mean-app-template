import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie/movie.service';
import { Movie } from '../../interfaces/movie';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  constructor(private movieService : MovieService) { }

  movies : Movie[];

  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }

}
