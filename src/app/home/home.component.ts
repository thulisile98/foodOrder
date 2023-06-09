import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/food';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: Foods[] = [];
  itemsData!: Observable<any>;


  constructor(private fs: FoodService, private route: ActivatedRoute, private firestore: Firestore) {
    this.firestore = firestore;
    this.getData();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchItem'])
        this.foods = this.fs.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      else if (params['tag'])
        this.foods = this.fs.getAllFoodByTag(params['tag']);
      else
        this.foods = this.fs.getAll();

    });
  }

  getData() {
    const collectionInstance = collection(this.firestore, 'products');
    collectionData(collectionInstance).subscribe(val => {
      console.log(val);
      this.itemsData = collectionData(collectionInstance);
    },
      error => {
        console.error('firestore Error:', error);
      }
    );

  }
}
