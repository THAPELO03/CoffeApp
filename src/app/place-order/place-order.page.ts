import { Component, OnInit } from '@angular/core';
import { OrderserviceService } from '../orderservice.service';
import { ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.page.html',
  styleUrls: ['./place-order.page.scss'],
})

export class PlaceOrderPage implements OnInit {
  Name
  Price;
  cID
  orderSet
  newOrder
  sugar
  Quantity
  milk
  Pic
  total:number=0;
  TotalPrice
  Orders=[]

  constructor(public orderservice:OrderserviceService,public route:ActivatedRoute) { 
    this.Name=this.orderservice.setName();
    this.Price = this.orderservice.setPrice();
    this.Quantity = this.orderservice.setQuantity();
    this.Pic = this.orderservice.setPic(); 
    this.Orders= this.orderservice.returnOrders();
    //this.orderSet=this.orderservice.getOrder();
  }

  setSugar(event){
    this.sugar=event.detail.value;
  }
  setMilk(event){
    this.milk=event.detail.value;
  }

  viewOrder(order){
    this.newOrder.push(order);
    this.total=this.total + order.cofiPrice;

  }

  getIncrementQuantity() {
    this.Quantity = this.orderservice.IncrementQuantity();
  }

  getDecrementQuantity() {
    this.Quantity = this.orderservice.DecrementQuantity();
  }
  //PlaceOrder(){
  //  this.orderservice.
 // }

  getTotal() {
    this.Price = this.orderservice.setTotalPrice(this.Quantity);
  }
  
  ngOnInit() {
    this.route.paramMap.subscribe(params =>{
        this.cID = params.get(this.cID);
    })
  }

  MadeOrder() {
    this.orderservice.MakeOrders(this.Name,this.Quantity,this.Price,this.Pic,this.sugar,this.milk);
  }

}
