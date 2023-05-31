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
  items!: CartItem[];
  constructor(public cartService: CartService, private foodService: FoodService) {


  }
  ngOnInit(): void {
    let foods = this.foodService.getAll();
    this.setCart();
    this.cartService.getTotalPrice()
  }

  setCart() {
    this.items = this.cartService.items;
  }

  removeFromCart(CartItem: CartItem) {
    this.cartService.removeFromCart(CartItem.food.id);
    this.setCart();

  }

  public changeQuantity(event: any, cartItem: any) {
    const newQuantity = parseInt(event.target.value, 10);
    cartItem.quantity = newQuantity;
    cartItem.subTotal = cartItem.food.price * newQuantity;
    this.cartService.totalPrice = this.calculateTotalPrice();
    console.log(this.items.length + (newQuantity - 1));

  }

  calculateTotalPrice() {
    let totalPrice = 0;
    for (const cartItem of this.items) {
      totalPrice += cartItem.subTotal;

    }
    return totalPrice;
  }



}
