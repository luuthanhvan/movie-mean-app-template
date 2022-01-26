import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { AddMovieRoutingModule } from './add-movie-routing.module';
import { AddMovieComponent } from './add-movie.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input"; // <= import this module to render properly material form input field
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';

/* Error: MatDatepicker: No provider found for DateAdapter. You must import one of the following modules at 
your application root: MatNativeDateModule, MatMomentDateModule, or provide a custom implementation. */
import { MatNativeDateModule } from '@angular/material/core';

const materiallUIComponents = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
];

@NgModule({
  declarations: [
    AddMovieComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AddMovieRoutingModule,
    materiallUIComponents,
  ],
  providers: [],
  bootstrap: []
})
export class AddMovieModule { }