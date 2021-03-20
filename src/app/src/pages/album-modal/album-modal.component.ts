import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-album-modal',
  templateUrl: './album-modal.component.html',
  styleUrls: ['./album-modal.component.scss']
})
export class AlbumModalComponent implements OnInit {

  private photosData;
  private id;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {id: number}) {
    this.id = data.id;
   }

  ngOnInit() {
    this.getPhotosData(this.id);
  }

  getPhotosData(id){
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
    .then((response) => response.json()) //2
    .then((result) => {
      this.photosData = result;
   });
  }

}

