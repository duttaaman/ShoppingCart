import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OutletContext } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  
  @Input()
  quantity;
  @Input()
  price;

  @Output()
  clearCountOnCheckout : EventEmitter<number> =new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  

  checkout(){
    if(this.quantity>0){
      alert("Total Price : "+this.price +"\n"+ "Transaction Successful!!!");
      this.clearCountOnCheckout.emit();
    }else
      alert("Please add items to cart");
  }
}
