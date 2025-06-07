// 1. src/models/Product.ts
export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public discountPercentage: number,
    public category: string,
    public description: string,
    public brand: string
  ) {}

  displayDetails(): void {
    console.log(`Product: ${this.title}\nDescription: ${this.description}\nBrand: ${this.brand}\nCategory: ${this.category}\nPrice: $${this.price.toFixed(2)}`);
  }

  getPriceWithDiscount(): number {
    return this.price - (this.price * this.discountPercentage / 100);
  }
}