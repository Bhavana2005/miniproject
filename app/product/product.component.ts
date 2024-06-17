import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products = [
    { name: 'Dumbbells', price: 300, image: 'assets/dumbbells.jpg' },
    { name: 'Protein Powder', price: 700, image: 'assets/protein_powder.jpg' },
    { name: 'Yoga Mat', price: 150, image: 'assets/yoga_mat.jpg' },
    { name: 'Jump Rope', price: 10, image: 'assets/jump_rope.jpg' },
    { name: 'Gym Bags', price: 500, image: 'assets/gym_bags.jpg' },
    { name: 'Exercise Ball', price: 150, image: 'assets/exercise_balls.jpg' },
    { name: 'Running Shoes', price: 800, image: 'assets/shoes.jpg' }
  ];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
