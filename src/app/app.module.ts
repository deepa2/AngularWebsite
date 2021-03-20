
import { HeaderComponent } from './components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './src/pages/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule, MatCardModule, MatSlideToggleModule, MatSidenavModule, MatTableModule, MatRadioModule, MatSnackBarModule, MatDatepickerModule, MatNativeDateModule, MatTabsModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlbumModalComponent } from './src/pages/album-modal/album-modal.component';
import { DashboardComponent } from './src/pages/dashboard/dashboard.component';
import { SearchPipe } from './services/search.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { BodyComponent } from './src/pages/body/body.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlbumModalComponent,
    DashboardComponent,
    SearchPipe,
    HeaderComponent,
    UserListComponent,
    UserProfileComponent,
    BodyComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    HttpClientModule,
    MatCardModule,
    MatExpansionModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule

  ],
  // exports: [ SearchPipe ],
  providers: [],
  entryComponents: [AlbumModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
