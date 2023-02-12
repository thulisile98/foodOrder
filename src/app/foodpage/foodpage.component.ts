import { FoodService } from './../services/food/food.service';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Foods } from '../shared/food';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent {
  food!: Foods;

  constructor(private activatedRoute: ActivatedRoute, private foodService: FoodService) {
    this.activatedRoute.params.subscribe((params) => {
      if (params['Id'])
        this.food = this.foodService.getAllById(params['Id']);
    })
  }

  ngOnInit() { }

}
