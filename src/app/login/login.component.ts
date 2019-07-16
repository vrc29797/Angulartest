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

  if (this.messageForm.controls.name.value = this.messageForm.controls.message.value)
  {
    this.success = true;
  }
  else 
  this.success = false;

 
}

}