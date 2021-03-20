import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  userData = [];
  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    fetch('https://reqres.in/api/login')
    .then((response) => response.json()) //2
    .then((result) => {
      this.userData = result.data;
      console.log("response",result)
    });
  }


  get f() {
    console.log(this.loginForm.controls)
    return this.loginForm.controls;}

  onSubmit() {
    this.submitted = true;
    this.loginForm.markAsTouched();
    // stop here if form is invalid
    console.log(this.loginForm)
    if (this.loginForm.invalid) {
      return;
    }
    const filteredArray = this.userData.filter(item => item.name == this.loginForm.controls.username.value);
    if(filteredArray.length){
      let key = 'user';
      let value = filteredArray[0];
      value = JSON.stringify(value);
      sessionStorage.setItem(key, value);
      this.router.navigate(['/body']);
    } else {
      alert("Invalid Username");
    }
  }

  public hasError = (controlName: string, errorName: string) => {
    console.log("has error", this.loginForm.controls[controlName].hasError(errorName))
    return this.loginForm.controls[controlName].hasError(errorName);
  }

    /* Handle form errors in Angular 8 */
    public errorHandling = (control: string, error: string) => {
      return this.loginForm.controls[control].hasError(error) ;
    }
}
