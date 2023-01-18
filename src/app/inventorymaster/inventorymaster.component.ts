import { Component } from '@angular/core';
import { product } from './product';

@Component({
  selector: 'app-inventorymaster',
  templateUrl: './inventorymaster.component.html',
  styleUrls: ['./inventorymaster.component.css']
})
export class InventorymasterComponent {
  productList: product[] = [];
  Action: string | any;

  ngOnInit(): void {
    let p1 = new product(1, "Mouse", 70 , 3 ,4 ,5 ,5);
    let p2 = new product(2, "Keyboard", 80 , 3 ,4 ,5 ,1.0);
    let p3 = new product(3, "Desktop", 30 , 3 ,4 ,5 ,20);
    this.productList.push(p1);
    this.productList.push(p2);
    this.productList.push(p3);
  }
  productCode:Number|any;
  UpdateproductCode:Number|any;
  productName = ""
  action = ""
  CountUpdate:Number|any;
  productStock:Number|any;
  productLength:Number|any;
  productWidth:Number|any;
  productHeight:Number|any;
  productWeight:Number|any;
  errorMessage = 'Invalid Action';
  successMessage: string | any;
  loginSuccess = false;

  Submits() {
  let Product = new product(this.productCode, this.productName, this.productStock, this.productLength, this.productWidth, this.productHeight, this.productWeight )
  this.productList.push(Product);  
  }
  
  IncreaseCount(Product:product, CountUpdate:Number){
    console.log("Inc")
    Product.productStock += CountUpdate;
    this.successMessage = "Successfully Increased count of product with code " + Product.productCode + " to " + Product.productStock
    console.log(this.successMessage)
   }
   DecreaseCount(Product:product, CountUpdate:Number | any){
    console.log("dec")
    Product.productStock = Product.productStock - CountUpdate;
    this.successMessage = "Successfully Decreased count of product with code " + Product.productCode + " to " + Product.productStock
    console.log(this.successMessage)

   }
  UpdateCount() {
    console.log("Update count")
    let Index = 0;
      for(let i=0; i<this.productList.length; i++){
      if(this.productList[i].productCode == this.UpdateproductCode){
      Index = i;
      break;}
  }
 const Product = this.productList[Index]
 console.log(Product.productName);

   if(Product){
    if(this.action == "Increase"){
        this.IncreaseCount(Product, this.CountUpdate);
    }else if(this.action == "Decrease"){
        this.DecreaseCount(Product, this.CountUpdate);
    }else{
      alert(this.errorMessage)
    }
   }else{
    alert("Invalid Product code");
   }
  }
}

