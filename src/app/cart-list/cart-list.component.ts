import { Component, OnInit, Input } from '@angular/core';
import { ProductsList } from './cartList.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  count;
  totalQuantity:number=0;
  totalPrice:number=0;  
  products:any;

  constructor( private productsList : ProductsList) { }

  ngOnInit() {
   this.productsList.getProductDetails().subscribe(data =>{
        this.products=data;
        this.count=([...Array(this.products.length).fill(0)])
        
   });
  }


  addToCart(index,product){
    this.totalPrice+= product.price;
    this.totalQuantity+=1;
    this.count[index]+=1;
  }

  removeFromCart(index,product){
    if(this.totalPrice>0 && this.totalQuantity>0 ){
    this.totalPrice-= product.price;
    this.totalQuantity-=1;
    
      this.count[index]-=1;
    }
    
   
  }

  clearCart(){
    this.totalPrice=0;
    this.totalQuantity=0;
    this.count=([...Array(this.products.length).fill(0)]);
  }
}
