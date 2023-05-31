import { CartItem } from './../shared/models/CartItem';
import { Foods } from './../shared/food';
import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: CartItem[] = [];
  totalPrice: number = 0;

  addToCart(food: Foods): void {
    let cartItem = this.items.find(item => item.food.id == food.id)
    if (cartItem) {
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return;
    }
    this.items.push(new CartItem(food, 1));
  }

  removeFromCart(foodId: number): void {
    this.items = this.items.filter(item => item.food.id! - foodId)
  }

  changeQuantity(quantity: number, foodId: number) {
    let CartItem = this.items.find(item => item.food.id === foodId);
    if (!CartItem) return;
    CartItem.quantity = quantity;
  }

  getTotalPrice() {
    this.totalPrice = this.items.map(item => item.subTotal).reduce((prevValue, currValue) => prevValue + currValue);
    return this.totalPrice;
  }


}
