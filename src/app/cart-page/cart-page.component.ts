import { CartService } from './../services/cart.service';
import { CartItem } from './../shared/models/CartItem';
import { Cart } from './../shared/models/Cart';
import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';



@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cart!: Cart;
  constructor(private cartService: CartService, private foodService: FoodService) {
    let foods = foodService.getAll();
    cartService.addToCart(foods[1]);
    cartService.addToCart(foods[3]);
    cartService.addToCart(foods[5]);
    this.setCart();
  }
  ngOnInit(): void {

  }

  setCart() {
    this.cart = this.cartService.getCart();
  }

  removeFromCart(CartItem: CartItem) {
    this.cartService.removeFromCart(CartItem.food.id);
    this.setCart();

  }

  changeQuantity(CartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(CartItem.food.id, quantity);
    this.setCart();
  }

}
