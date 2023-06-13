import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartItem } from '../shared/models/CartItem';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  items!: CartItem[];

  constructor(private cartService: CartService, private firestore: Firestore) { }

  ngOnInit(): void {
    this.setCart();
  }

  setCart() {
    this.items = this.cartService.items;

    if (this.items.length >= 0) {
      for (const cartItem of this.items) {
        const { name, description, price, imageUrl } = cartItem.food;
        const orderData = { name, description, price, imageUrl };

        addDoc(collection(this.firestore, 'orders'), orderData)
          .then((docRef) => {
            console.log('Data saved:', docRef.id);
          })
          .catch((error) => {
            console.error('Error saving data:', error);
          });
      }
    }
  }


}
