import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

import { products } from "../products";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  products;
  constructor(private data: DataService) {}

  ngOnInit() {
    // get all product data from the products fake service
    // this.data.getProducts().subscribe(products => {
    //   this.products = products;
    //   console.log(this.products);
    // });
    this.products = products;
  }

  requestProduct(product) {
    console.log("Requested the product ", product);
  }
}
