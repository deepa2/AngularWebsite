import { BodyComponent } from './src/pages/body/body.component';
import { DashboardComponent } from './src/pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './src/pages/login/login.component';
import { AlbumModalComponent } from './src/pages/album-modal/album-modal.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'album-modal', component: AlbumModalComponent},
  { path: 'body', component: BodyComponent},
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
