import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { DataService } from "../data.service";
import { products } from "../products";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  product;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get("productId")];
    });
  }
}
