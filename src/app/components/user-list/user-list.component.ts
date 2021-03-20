import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Output() eventClicked = new EventEmitter<Event>();

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
  displayedColumns:any=[]

  constructor(private dialog: MatDialog, private router: Router, private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.getUserList();
    this.userDetails = JSON.parse(sessionStorage.getItem('user'));
    if(!this.userDetails){
      this.router.navigate(['/login']);
    }
  }
  getUserList() {
    fetch('https://reqres.in/api/users')
      .then((response) => response.json()) //2
      .then((result) => {
        this.userList = result.data;
        //CREATE DISPLAYED COLUMNS DYNAMICALLY
        this.displayedColumns= Object.getOwnPropertyNames(this.userList[0])
        console.log("userList",this.userList)
      });
  }

  onClick(event: Event): void {
    this.eventClicked.emit(event);
  }
}
