import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  items!: CartItem[];
  totalPrice!: number;
  constructor(private CartService: CartService) { }

  ngOnInit(): void {
    this.setCart();

  }
  setCart() {
    this.items = this.CartService.items;
  }
}
