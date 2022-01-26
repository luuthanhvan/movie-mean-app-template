import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from '@angular/common/http';

// import components
import { MovieComponent } from "./components/movie/movie.component";
// import { TheaterComponent } from './components/theater/theater.component';
import { AdminComponent } from "./components/admin/admin.component";
import { HomeComponent } from "./components/home/home.component";

// import material modules
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatCardModule } from "@angular/material/card";

const materiallUIComponents = [
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatButtonModule,
  MatMenuModule,
  MatCardModule,
];

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    // TheaterComponent,
    AdminComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    materiallUIComponents,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
