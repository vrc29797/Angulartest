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
  isSubmitted  =  false;

  quotation;
  fromDate;
  toDate;
  quantity;


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
  }
  get formControls() { return this.requestForm.controls; }
  
  requestProduct(product) {
    console.log(this.requestForm.value);
    console.log(product.id);

    this.isSubmitted=true;
    if(this.requestForm.invalid) {
      return;
    }

    this.quotation=this.requestForm.controls.quotation.value;
    this.quantity=this.requestForm.controls.quantity.value;
    this.fromDate = this.requestForm.controls.fromDate.value;
    this.toDate = this.requestForm.controls.toDate.value;

    var products = this.dataService.getProducts();

    let reqproduct = products[product.id];
    

    console.log(reqproduct);
    
  }
}
