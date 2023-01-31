import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): string[] {
    return [
      '/assets/food-1.jpg',
      '/assets/food-2.jpg',
      '/assets/food-3.jpg',
      '/assets/food-4.jpg',
      '/assets/food-5.jpg',
      '/assets/food-6.jpg',
      '/assets/food-7.jpg',
      '/assets/food-8.jpg',
      '/assets/food-9.jpg',
      '/assets/food-10.jpg',
      '/assets/food-11.jpg',
      '/assets/food-12.jpg',
      '/assets/food-13.jpg',
      '/assets/food-14.jpg',
      '/assets/food-15.jpg',
      '/assets/food-16.jpg',
      '/assets/food-17.png',
      '/assets/food-18.jpg',
      '/assets/food-19.jpg',
      '/assets/food-20.jpg',
    ]
  }
}
