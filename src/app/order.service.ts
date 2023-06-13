import { Injectable } from '@angular/core';
import { CartItem } from './shared/models/CartItem';



@Injectable({
  providedIn: 'root'
})
export class OrderService {
  items: CartItem[] = [];
  totalPrice: number = 0;
  constructor() { }
}
