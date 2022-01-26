import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { genres, MovieService } from '../../../services/movie/movie.service';
@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  addMovieForm: FormGroup;
  genres : string[] = genres;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.addMovieForm = new FormGroup({
      movieName: new FormControl(''),
      genre: new FormControl([]),
      runningTime: new FormControl(''),
      releaseDate: new FormControl(''),
      cast: new FormControl([]),
      director: new FormControl(''),
      status: new FormControl(''),
      poster: new FormControl('/assets/movie_posters/the_snowdrop.jpg'),
    });
  }

  handleSubmitMovie(form: FormGroup) {
    const data = form.value; // data get from form
    // console.log('DATA:', data);
    this.movieService.addMovie(data).subscribe((res) => {
      console.log(res);
      // show success/failed message via toast message (snackbar material ui component)
    });
  }
}
