import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  messageForm: FormGroup;
  submitted = false;
  success = false;
  userType = 'requester';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {this.messageForm = this.formBuilder.group({
    name: ['', Validators.required],
    message: ['', Validators.required]
  });
}

onSubmit() {
  this.submitted = true;

  if (this.messageForm.invalid) {
      return;
  }

  if (this.messageForm.controls.name.value == this.messageForm.controls.message.value 
    && this.messageForm.controls.message.value == 'admin')
  {
    this.success = true;
    this.userType = 'Admin'
  }
  else if (this.messageForm.controls.name.value == this.messageForm.controls.message.value 
    && this.messageForm.controls.message.value == 'req')
  {
    this.success = true;
    this.userType = 'Requester'
  } 
  
  else if (this.messageForm.controls.name.value == this.messageForm.controls.message.value 
    && this.messageForm.controls.message.value == 'pro')
  {
    this.success = true;
    this.userType = 'Provider'
  }

  else 
  this.success = false;

 
}

}