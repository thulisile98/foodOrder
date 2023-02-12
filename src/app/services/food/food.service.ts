import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllById(id: number): Foods {
    return this.getAll().find(food => food.id == id)!;
  }
  getAllFoodByTag(tag: string): Foods[] {
    return tag == "All" ?
      this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  }
  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 20 },
      { name: 'fastfood', count: 10 },
      { name: 'pizza', count: 3 },
      { name: 'chips', count: 3 },
      { name: 'burger', count: 4 },
      { name: 'wings', count: 2 },
      { name: 'drinks', count: 1 },
      { name: 'salad', count: 3 },
    ]

  }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        price: 15,
        name: 'wings& salad',
        favourite: true,
        star: 3.5,
        tags: ['fastfood', 'wings'],
        imageUrl: '/assets/food-1.jpg',
        cookTime: '10-20',
        description: ['famous Italian wings'],
      },
      {
        id: 2,
        price: 10,
        name: 'beacon pizza',
        favourite: false,
        star: 2,
        tags: ['fastfood', 'pizza'],
        imageUrl: '/assets/food-2.jpg',
        cookTime: '15-50',
        description: ['tomato pizza with onion rings'],
      },
      {
        id: 3,
        price: 10,
        name: 'tomato & berry pizza',
        favourite: false,
        star: 4.5,
        tags: ['fastfood', 'pizza'],
        imageUrl: '/assets/food-3.jpg',
        cookTime: '15-30',
        description: ['spicy pizza with full tomatoes'],
      },
      {
        id: 4,
        price: 6,
        name: 'wings',
        favourite: true,
        star: 5,
        tags: ['fastfood', 'wings'],
        imageUrl: '/assets/food-4.jpg',
        cookTime: '10-20',
        description: ['ducked in hot sauce South-African wings'],
      },
      {
        id: 5,
        price: 12,
        name: 'stick Salad',
        favourite: false,
        star: 3,
        tags: ['fastfood', 'salads'],
        imageUrl: '/assets/food-5.jpg',
        cookTime: '5-15',
        description: ['South-Africa'],
      },
      {
        id: 6,
        price: 60,
        name: 'mochino drink',
        favourite: false,
        star: 4,
        tags: ['drinks'],
        imageUrl: '/assets/food-6.jpg',
        cookTime: '5',
        description: ['South-Africa'],
      },
      {
        id: 7,
        price: 12,
        name: 'fish & chips',
        favourite: true,
        star: 3,
        tags: ['fish', 'chips'],
        imageUrl: '/assets/food-7.jpg',
        cookTime: '15-20',
        description: ['South-Africa'],
      },
      {
        id: 8,
        price: 12,
        name: 'beef & cheese',
        favourite: false,
        star: 2,
        tags: ['burger'],
        imageUrl: '/assets/food-8.jpg',
        cookTime: '20-30',
        description: ['Brazil'],
      },
      {
        id: 9,
        price: 12,
        name: 'eggs and cheese',
        favourite: true,
        star: 1,
        tags: ['fastfood', 'fatty'],
        imageUrl: '/assets/food-9.jpg',
        cookTime: '5-15',
        description: ['Spain'],
      },
      {
        id: 10,
        price: 12,
        name: 'double-cheese Burger',
        favourite: false,
        star: 5,
        tags: ['fastfood', 'burger'],
        imageUrl: '/assets/food-10.jpg',
        cookTime: '15-30',
        description: ['South-Africa'],
      },

      {
        id: 11,
        price: 15,
        name: 'burgerStrips',
        favourite: false,
        star: 5,
        tags: ['fastfood', 'burger'],
        imageUrl: '/assets/food-11.jpg',
        cookTime: '15-30',
        description: ['Italy'],
      },
      {
        id: 12,
        price: 15,
        name: 'salad',
        favourite: false,
        star: 3,
        tags: ['salad'],
        imageUrl: '/assets/food-12.jpg',
        cookTime: '15-50',
        description: ['Spain'],
      },
      {
        id: 13,
        price: 14,
        name: 'mashroom ald',
        favourite: false,
        star: 4,
        tags: ['salad'],
        imageUrl: '/assets/food-13.jpg',
        cookTime: '15-30',
        description: ['Italy'],
      },
      {
        id: 14,
        price: 6,
        name: 'family-meal',
        favourite: false,
        star: 5,
        tags: ['fastfood', 'salad', 'wraps'],
        imageUrl: '/assets/food-14.jpg',
        cookTime: '20-40',
        description: ['South-Africa'],
      },
      {
        id: 15,
        price: 8,
        name: 'fruit Salad',
        favourite: false,
        star: 2,
        tags: ['fruits'],
        imageUrl: '/assets/food-15.jpg',
        cookTime: '5-15',
        description: ['South-Africa'],
      },
      {
        id: 16,
        price: 60,
        name: 'burgerchips',
        favourite: false,
        star: 2,
        tags: ['burger', 'chips'],
        imageUrl: '/assets/food-16.jpg',
        cookTime: '5',
        description: ['South-Africa'],
      },
      {
        id: 17,
        price: 12,
        name: 'fish - chips',
        favourite: true,
        star: 5,
        tags: ['fastfood', 'fish', 'chips'],
        imageUrl: '/assets/food-17.png',
        cookTime: '15-20',
        description: ['South-Africa']
      },
      {
        id: 18,
        price: 12,
        name: 'fish-meal',
        favourite: false,
        star: 4,
        tags: ['fastfood', 'fish', 'chips'],
        imageUrl: '/assets/food-18.jpg',
        cookTime: '20-30',
        description: ['Brazil'],
      },
      {
        id: 19,
        price: 12,
        name: 'salad wraps',
        favourite: true,
        star: 1,
        tags: ['wrap'],
        imageUrl: '/assets/food-19.jpg',
        cookTime: '30-45',
        description: ['Spain'],
      },
      {
        id: 20,
        price: 12,
        name: 'chicken & masshroom pizza',
        favourite: true,
        star: 3,
        tags: ['pizza'],
        imageUrl: '/assets/food-20.jpg',
        cookTime: '15-30',
        description: ['South-Africa'],
      },











    ]
  }
}
