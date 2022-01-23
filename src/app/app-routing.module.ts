import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { MovieComponent } from './components/movie/movie.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'movie',
        component: MovieComponent,
      },
      {
        path: 'movie/add',
        loadChildren : () => import('./components/movie/add-movie/add-movie.module').then(m => m.AddMovieModule),
      },
      {
        path: 'movie/edit',
        loadChildren : () => import('./components/movie/edit-movie/edit-movie.module').then(m => m.EditMovieModule),
      },
      {
				path: '**', redirectTo: '/admin', pathMatch: 'full', // for page not found
			}
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
