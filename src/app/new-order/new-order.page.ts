import { Component, OnInit } from '@angular/core';
import { OrderserviceService } from '../orderservice.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.page.html',
  styleUrls: ['./new-order.page.scss'],
})
export class NewOrderPage implements OnInit {

Coffee

  constructor(public orderservice:OrderserviceService) { 
    this.Coffee= this.orderservice.getCategories()
  }
  
  getName(Name){
    this.orderservice.getIt(Name)
  }

  ngOnInit() {
  }

}
