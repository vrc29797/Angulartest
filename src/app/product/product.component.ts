import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { DataService } from "../data.service";
import { products } from "../products";
import { AuthService } from '../auth.service';

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  product;
  user;
  requestForm : FormGroup;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private formBuilder: FormBuilder) {}

  ngOnInit() {


    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get("productId")];
    });
    this.user=this.authService.getUserName();

    this.requestForm  =  this.formBuilder.group({
      quotation: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate : ['', Validators.required],
      numberRequired : ['', Validators.required]
    });
  }

  requestProduct(product) {
    console.log("Requested");
    
    
  }
}
