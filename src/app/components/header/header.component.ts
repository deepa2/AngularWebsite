import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userDetails = null;
  isPosts: boolean = true;
  isAlbums: boolean = false;
  isToDos: boolean = false;
  postData = [];
  albumsData = [];

  constructor(private router:Router) { }

  ngOnInit() {
    // get userdetails from session storage to display current logged In username
    this.userDetails = JSON.parse(sessionStorage.getItem('user'));
  }
  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

}
