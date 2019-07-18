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
  responseForm: FormGroup;
  isSubmitted  =  false;

  quotation;
  fromDate;
  toDate;
  quantity;
  reqMessage = 'Request Submitted';
  resMessage = 'Response Confirmed';
  instock = false;

  requestDetails;
  responseDetails;


  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private dataService : DataService) {}

  ngOnInit() {


    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get("productId")];
    });
    this.user=this.authService.getUserName();

    this.requestForm  =  this.formBuilder.group({
      quotation: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate : ['', Validators.required],
      quantity : ['', Validators.required]
    });

    this.responseForm  =  this.formBuilder.group({
      quotation: ['', Validators.required]
    });

    if(localStorage.getItem('requestDetails')) {
      this.requestDetails = JSON.parse(localStorage.getItem('requestDetails'));
    }

  }
  get formControls() { return this.requestForm.controls; }
  
  requestProduct(product) {
    console.log(this.requestForm.value);

    if(this.requestForm.invalid) {
      return;
    }
    this.isSubmitted=true;

    this.requestDetails = {
      quotation: this.requestForm.controls.quotation.value,
      quantity: this.requestForm.controls.quantity.value,
      fromDate: this.requestForm.controls.fromDate.value,
      toDate: this.requestForm.controls.toDate.value,
      productId: product.id
    }

    var products = this.dataService.getProducts();

    let reqproduct = products[product.id];
    if(Number(reqproduct.inStock)<Number(this.requestDetails.quantity))
    {
      this.reqMessage='Stock is less than quantity.';
    } else {
      localStorage.setItem("requestDetails", JSON.stringify(this.requestDetails));
    }


    console.log(reqproduct.inStock);
    
  }

  confirmRequest(product) {

    console.log(this.responseForm.value);

    if(this.responseForm.invalid) {
      return;
    }
    this.isSubmitted=true;

    this.requestDetails = {
      quotation: this.requestForm.controls.quotation.value
    };

    let products = JSON.parse(localStorage.getItem('products'));
    let currentProduct =products[product.id];
    currentProduct.inStock-=

  }
}
