import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        price: 15,
        name: 'wings',
        favourite: false,
        star: 3.5,
        tags: ['FastFood', 'Wings'],
        imageUrl: '/assets/food-1.jpg',
        cookTime: '10-20',
        original: ['Italy'],
      },
      {
        id: 2,
        price: 10,
        name: 'pizza',
        favourite: false,
        star: 5,
        tags: ['FastFood', 'Pizza'],
        imageUrl: '/assets/food-2.jpg',
        cookTime: '15-50',
        original: ['Italy'],
      },
      {
        id: 3,
        price: 10,
        name: 'pizza',
        favourite: false,
        star: 4.5,
        tags: ['FastFood', 'pzza'],
        imageUrl: '/assets/food-3.jpg',
        cookTime: '15-30',
        original: ['Italy'],
      },
      {
        id: 4,
        price: 6,
        name: 'wings',
        favourite: false,
        star: 8,
        tags: ['FastFood', 'Wings'],
        imageUrl: '/assets/food-4.jpg',
        cookTime: '10-20',
        original: ['South-Africa'],
      },
      {
        id: 5,
        price: 12,
        name: 'stick Salad',
        favourite: false,
        star: 3,
        tags: ['FastFood', 'salads'],
        imageUrl: '/assets/food-5.jpg',
        cookTime: '5-15',
        original: ['South-Africa'],
      },
      {
        id: 6,
        price: 60,
        name: 'mochino drink',
        favourite: false,
        star: 7,
        tags: ['FastFood', 'drinks'],
        imageUrl: '/assets/food-6.jpg',
        cookTime: '5',
        original: ['South-Africa'],
      },
      {
        id: 7,
        price: 12,
        name: 'fish & chips',
        favourite: true,
        star: 3,
        tags: ['FastFood', 'fish', 'chips'],
        imageUrl: '/assets/food-7.jpg',
        cookTime: '15-20',
        original: ['South-Africa'],
      },
      {
        id: 8,
        price: 12,
        name: 'beef & cheese',
        favourite: false,
        star: 2,
        tags: ['FastFood', 'burger'],
        imageUrl: '/assets/food-8.jpg',
        cookTime: '20-30',
        original: ['Brazil'],
      },
      {
        id: 9,
        price: 12,
        name: 'eggs and cheese',
        favourite: true,
        star: 1,
        tags: ['FastFood', 'fatty'],
        imageUrl: '/assets/food-9.jpg',
        cookTime: '5-15',
        original: ['Spain'],
      },
      {
        id: 10,
        price: 12,
        name: 'double-cheese Burger',
        favourite: false,
        star: 9,
        tags: ['FastFood', 'burger'],
        imageUrl: '/assets/food-10.jpg',
        cookTime: '15-30',
        original: ['South-Africa'],
      },

      {
        id: 11,
        price: 15,
        name: 'burgerStrips',
        favourite: false,
        star: 8.5,
        tags: ['FastFood', 'burger'],
        imageUrl: '/assets/food-11.jpg',
        cookTime: '15-30',
        original: ['Italy'],
      },
      {
        id: 12,
        price: 15,
        name: 'salad',
        favourite: false,
        star: 5,
        tags: ['FastFood', 'salad'],
        imageUrl: '/assets/food-12.jpg',
        cookTime: '15-50',
        original: ['Spain'],
      },
      {
        id: 13,
        price: 14,
        name: 'pizza',
        favourite: false,
        star: 4.5,
        tags: ['FastFood', 'salad'],
        imageUrl: '/assets/food-13.jpg',
        cookTime: '15-30',
        original: ['Italy'],
      },
      {
        id: 14,
        price: 6,
        name: 'family-meal',
        favourite: false,
        star: 8,
        tags: ['FastFood', 'salad', 'Wraps'],
        imageUrl: '/assets/food-14.jpg',
        cookTime: '20-40',
        original: ['South-Africa'],
      },
      {
        id: 15,
        price: 8,
        name: 'fruit Salad',
        favourite: false,
        star: 7,
        tags: ['FastFood', 'fruits'],
        imageUrl: '/assets/food-15.jpg',
        cookTime: '5-15',
        original: ['South-Africa'],
      },
      {
        id: 16,
        price: 60,
        name: 'burgerchips',
        favourite: false,
        star: 7,
        tags: ['FastFood', 'burger', 'chips'],
        imageUrl: '/assets/food-16.jpg',
        cookTime: '5',
        original: ['South-Africa'],
      },
      {
        id: 17,
        price: 12,
        name: 'fish - chips',
        favourite: true,
        star: 5,
        tags: ['FastFood', 'fish', 'chips'],
        imageUrl: '/assets/food-17.png',
        cookTime: '15-20',
        original: ['South-Africa']
      },
      {
        id: 18,
        price: 12,
        name: 'fish-meal',
        favourite: false,
        star: 4,
        tags: ['FastFood', 'fish', 'chips'],
        imageUrl: '/assets/food-18.jpg',
        cookTime: '20-30',
        original: ['Brazil'],
      },
      {
        id: 19,
        price: 12,
        name: 'full chicken',
        favourite: true,
        star: 1,
        tags: ['FastFood', 'chicken'],
        imageUrl: '/assets/food-19.jpg',
        cookTime: '30-45',
        original: ['Spain'],
      },
      {
        id: 20,
        price: 12,
        name: 'wrappster',
        favourite: true,
        star: 9,
        tags: ['FastFood', 'salads'],
        imageUrl: '/assets/food-19.jpg',
        cookTime: '15-30',
        original: ['South-Africa'],
      },











    ]
  }
}
