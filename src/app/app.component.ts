import { Component } from '@angular/core';
import { product } from './inventorymaster/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productList: product[] = [];
  Products: product[] = [];
  ngOnInit(): void {
    let p1 = new product(1, "Mouse", 70 , 3 ,4 ,5 ,5);
    let p2 = new product(2, "Keyboard", 80 , 3 ,4 ,5 ,1.0);
    let p3 = new product(3, "Desktop", 30 , 3 ,4 ,5 ,20);
    this.productList.push(p1);
    this.productList.push(p2);
    this.productList.push(p3);
    sessionStorage.setItem('Products', JSON.stringify(this.productList))
    // Products = JSON.parse(sessionStorage.getItem('Products'))
  }
}
