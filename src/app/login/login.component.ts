import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import { Apollo, gql } from 'apollo-angular';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';

const getQuery = gql`
  query GrabLogin($username: String!, $password: String!) {
    grabLogin(username: $username, password: $password) {
      _id
      username
      email
    }
  }
`

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = false;

  constructor(private fb: FormBuilder, private apollo: Apollo, private activatedRoute: ActivatedRoute,
              private router: Router, private authservice: AuthenticateService) { }

  ngOnInit(): any {
  }

  loginForm: FormGroup = this.fb.group(
    {
      username: new FormControl('', [Validators.required, Validators.email ]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    }
  );

  onLogin(){
    if (!this.loginForm.valid){
    return;
    }
    console.log(this.loginForm.value);
  }
  /*
  onSubmit(form: NgForm) {
    const user = form.value.username;
    const pass = form.value.password;

    this.apollo
      .query<any>({
        query: getQuery,
        variables: {
          username: user,
          password: pass,
        },
      })
      .subscribe(({ data }) => {
        this.user = data.grabLogin;
       if (this.user != null) {
         // this.authservice.login(true, this.user);
          this.router.navigate(['/hotels']);
        }
      });
  }
*/
  createNewAccount(){
    console.log('registerform loading');
  }
}
