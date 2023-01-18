export class product{
    productCode: Number | any;
    productName: String | any;
    productStock: Number | any;
    productLength: Number | any;
    productWidth: Number | any;
    productHeight: Number | any;
    productWeight: Number | any;
   constructor(
    productCode:Number,
    productName: String,
    productStock:Number,
    productLength:Number,
    productWidth:Number,
    productHeight:Number,
    productWeight:Number
   ){
       this.productCode = productCode;
       this.productName = productName;
       this.productStock = productStock;
       this.productLength = productLength;
       this.productWidth = productWidth;
       this.productHeight = productHeight;
       this.productWeight = productWeight;
   }
   
   // set ProductCode(productCode: Number){
   //     this.productCode = productCode;
   // }
   // set ProductName(productName: String){
   //     this.productName = productName;
   // }
   // set ProductStock(productStock: Number){
   //     this.productStock = productStock;
   // }
   // set ProductLength(productLength: Number){
   //     this.productLength = productLength;
   // }
   // set ProductWidth(productWidth: Number){
   //     this.productWidth = productWidth;
   // }
   // set ProductHeight(productHeight: Number){
   //     this.productHeight = productHeight;
   // }
   // set ProductWeight(productWeight: Number){
   //     this.productWeight = productWeight;
   // }
   
   // get ProductCode(): Number {
   //     return this.productCode;
   // }
   // get ProductName(): String {
   //     return this.productName;
   // }
   // get ProductStock(): Number {
   //     return this.productStock;
   // }
   // get ProductLength(): Number {
   //     return this.productLength;
   // }
   // get ProductWidth(): Number {
   //     return this.productWidth;
   // }
   // get ProductHeight(): Number {
   //     return this.productHeight;
   // }
   // get ProductWeight(): Number {
   //     return this.productWeight;
   // }
}