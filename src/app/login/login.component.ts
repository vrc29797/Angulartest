import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from  '@angular/router';
import { User } from  '../user';
import { AuthService } from  '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted  =  false;
  isCorrect = false;
  

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() { this.loginForm  =  this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    });
}
get formControls() { return this.loginForm.controls; }

login(){
  console.log(this.loginForm.value);

  this.isSubmitted = true;
  if(this.loginForm.invalid){
    return;
  }
  if(this.loginForm.controls.email.value==this.loginForm.controls.password.value &&
    this.loginForm.controls.email.value=='admin')
   { this.authService.login(this.loginForm.value);
    this.isCorrect=true;
    this.router.navigateByUrl('/');
  }

  else if(this.loginForm.controls.email.value==this.loginForm.controls.password.value &&
    this.loginForm.controls.email.value=='req')
   { this.authService.login(this.loginForm.value);
    this.isCorrect=true;
    this.router.navigateByUrl('/');
  } 

  else if(this.loginForm.controls.email.value==this.loginForm.controls.password.value &&
    this.loginForm.controls.email.value=='pro')
   { this.authService.login(this.loginForm.value);
    this.isCorrect=true;
    this.router.navigateByUrl('/');
  }
  else 
  { this.isCorrect=false;
    return;
  }
}

}