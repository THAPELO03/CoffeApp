import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {
  Name
  Price;
  Quantity;
  Total;
  Pic;
  private Orders = [];
  coffeeCategory=[{cofiName:'Cuppacino',cofiPrice:50,cofiPic:'cuppo.jpg',cofiQuantity: 1},
                  {cofiName:'Latte',cofiPrice:180,cofiPic:'latte.jpg',cofiQuantity: 1},
                  {cofiName:'Espresso',cofiPrice:180,cofiPic:'coffe.jpg',cofiQuantity: 1},
                  {cofiName:'Plain coffee',cofiPrice:60, cofiPic:'coffee-1117933__340.jpg',cofiQuantity: 1}];



 
    


  //name:string="";
  //price:string="";
  //pic:String="";

  //Addcoffee(name,price,pic){
   // this.coffeeCategory.push({cofiName:name, cofiPic:pic, cofiPrice:price})
    
  //this.name="";
  //this.pic="";
 // this.price="";
  //}

  constructor() { }
  getCategories(){
    return this.coffeeCategory
  }

    getIt(name){
      this.Name = name.cofiName;
      this.Price = name.cofiPrice;
      this.Quantity = name.cofiQuantity;
      this.Pic = name.cofiPic
    }

    setName(){
      return this.Name;
    }

    setPrice() {
      return this.Price;
    }

    setQuantity() {
      return this.Quantity;
    }

    setPic(){
      return this.Pic
    }
    
    IncrementQuantity() {
      this.Quantity++;
      return this.Quantity;
    }

    DecrementQuantity() {
      if(this.Quantity > 1){
        this.Quantity--;
        return this.Quantity;
      }else if(this.Quantity <= 1){
        return this.Quantity;
      }
    }

    setTotalPrice(quantity) {
      this.Total = this.Price * quantity;
      return this.Total;
    }

    MakeOrders(name,quantity,price,pic,sugar,milk) {
      this.Orders.push({
        cofiName:name,
        cofiQuantity: quantity,
        cofiPrice:price,
        cofiPic:pic,
        cofisugar:sugar,
        cofimilk:milk,
      })
    }

    returnOrders() {
      return this.Orders;
    }

}
