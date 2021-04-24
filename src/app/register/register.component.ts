import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';

interface ownprefix{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = false;
  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute,
              private router: Router) { }

  registerForm: FormGroup = this.fb.group(
    {
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    }
  );
  ngOnInit(): void {
  }

  /*saveForm() {
    if (!this.registerForm.valid){
      return;
    }
    console.log(this.registerForm.value);
  }
  */

  onSubmit(): void {
    
  }
}
