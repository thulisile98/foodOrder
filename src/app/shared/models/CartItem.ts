import { Foods } from './../food';


export class CartItem {

    food: Foods;
    quantity: number;
    subTotal: number;

    constructor(food: Foods, quantity: number) {
        this.food = food;
        this.quantity = quantity;
        this.subTotal = this.food.price;
    }

    incrementQuantity() {
        this.quantity = this.quantity + 1;
        this.subTotal = this.food.price + this.food.price;
    }

    decrementQuantity() {
        this.quantity = this.quantity - 1;
        this.subTotal = this.food.price - this.food.price;
    }

    get price(): number {

        return this.food.price * this.quantity
    }
}