import { Router, ActivatedRoute } from '@angular/router';
import { AlbumModalComponent } from './../album-modal/album-modal.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  isPosts: boolean = true;
  isAlbums: boolean = false;
  isToDos: boolean = false;
  userList = [];
  albumsData = [];
  toDosData = [];
  toDosFilteredData = [];
  searchInput: string = ""
  isChecked = false;
  userDetails = null;
  tabs: any = {};
  displayedColumns: any = []
  pageTitle:string=" User Details Dashboard"
  clickedEvent: Event;


  constructor(private dialog: MatDialog, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.userDetails = JSON.parse(sessionStorage.getItem('user'));
    if (!this.userDetails) {
      this.router.navigate(['/login']);
    }

  }

// listening to event emitted by user list component
  childEventClicked(event: Event) {
    this.clickedEvent = event;
    console.log("event emitted",this.clickedEvent)
  }

}
