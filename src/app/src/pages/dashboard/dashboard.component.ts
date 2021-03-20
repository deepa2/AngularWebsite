import { Router, ActivatedRoute } from '@angular/router';
import { AlbumModalComponent } from './../album-modal/album-modal.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isPosts: boolean = true;
  isAlbums: boolean = false;
  isToDos: boolean = false;
  postData = [];
  albumsData = [];
  toDosData = [];
  toDosFilteredData = [];
  searchInput: string = ""
  isChecked = false;
  userDetails = null;
  constructor(private dialog: MatDialog, private router: Router, private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.getPostData();
    this.userDetails = JSON.parse(sessionStorage.getItem('user'));
    if(!this.userDetails){
      this.router.navigate(['/login']);
    }
  }

  // toggle(type) {
  //   if (type == 'post') {
  //     this.getPostData();
  //     this.isPosts = true;
  //     this.isAlbums = false;
  //     this.isToDos = false;
  //   } else if (type == 'album') {
  //     this.getAlbumsData();
  //     this.isAlbums = true;
  //     this.isToDos = false;
  //     this.isPosts = false;
  //   }
  //   else if (type == 'toDo') {
  //     this.getToDosData();
  //     this.isToDos = true;
  //     this.isAlbums = false;
  //     this.isPosts = false;
  //   }
  // }

  getPostData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json()) //2
      .then((result) => {
        this.postData = result;
      });
  }

  getAlbumsData() {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json()) //2
      .then((result) => {
        this.albumsData = result;
      });
  }

  openDialog(id) {
    const dialogRef = this.dialog.open(AlbumModalComponent,
      {
        data: { id: id },
      }
    );
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getToDosData() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json()) //2
      .then((result) => {
        this.toDosData = result;
        this.toDosFilteredData = result;
      });
  }

  displayCompleted() {
    console.log(this.isChecked);
    if (this.isChecked) {
      this.toDosFilteredData = this.toDosData;
    }
    else {
      this.toDosFilteredData = this.toDosData.filter(item => item.completed != this.isChecked);
    }
  }

  aplhaSort() {
    this.albumsData.sort(function (a, b) {
      var titleA = a.title.toUpperCase();
      var titleB = b.title.toUpperCase();
      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
      return 0;
    });
  }

  sort() {
    this.albumsData.sort(function (a, b) {
      var titleA = a.title.toUpperCase();
      var titleB = b.title.toUpperCase();
      if (titleA > titleB) {
        return -1;
      }
      if (titleA < titleB) {
        return 1;
      }
      return 0;
    });
  }

  getComments(postId) {
    return 0;
  }

  getPhotos(albumId) {
    return 0;
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

}
