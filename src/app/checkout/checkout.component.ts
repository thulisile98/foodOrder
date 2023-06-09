
import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart.service';
import { CartItem } from '../shared/models/CartItem';
import { Foods } from '../shared/food';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  items!: CartItem[];
  totalPrice!: number;
  constructor(private CartService: CartService) { }

  ngOnInit(): void {
    this.totalPrice = this.CartService.calculateTotalPrice();

  }
  setCart() {
    this.items = this.CartService.items;
  }

}
