import { Component, OnInit, ViewChild, Input, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  @Input() event: any;
  nonChecked: boolean = true;
  userData: any;
  model: any = {};
  stateNames: string[] = ["Maharashtra", "Delhi", "Karnataka","Tamil Nadu"];
  languageList: string[] = ["Marathi", "Hindi","Kannada","English","Gujarati"];
  isFormSubmitted: boolean = false;
  progLanguages = [
    { name: 'JAVA', value: '1', checked: false },
    { name: 'C++', value: '2', checked: false },
    { name: 'JS', value: '3', checked: false }
  ]

  constructor() { }

  ngOnInit() {

  }

  //set form field values of user received from parent component
  ngOnChanges(changes: SimpleChanges): void {
    console.log('value changed', this.event);
    this.userData = this.event
    if (this.event) {
      this.model = {
        firstName: this.userData.first_name,
        lastName: this.userData.last_name,
        email: this.userData.email
      }
    }
  }

  onSubmit(contactForm: any) {
    console.log("contect form", contactForm)
    if (contactForm.valid) {
      console.log(JSON.stringify(this.model));
      // Setting isFormSubmitted true to display the form submitted values
      this.isFormSubmitted = true;
    }

  }
  // verify whether checkbox is checked or not
  check() {
    const selectedItems = this.progLanguages.filter((item) => item.checked === true);
    if (selectedItems.length > 0) {
      this.nonChecked = false;
    } else {
      this.nonChecked = true;
    }
  }

}

