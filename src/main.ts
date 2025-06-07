// 6. src/main.ts
import { fetchProducts } from './services/apiService';
import { calculateDiscount } from './utils/discountCalculator';
import { calculateTax } from './utils/taxCalculator';
import { handleError } from './utils/errorHandler';

// Define the Product type if not already defined
interface Product {
  price: number;
  discountPercentage: number;
  category: string;
  displayDetails: () => void;
  getPriceWithDiscount: () => number;
}

async function run() {
  try {

    const products: Product[] = await fetchProducts();

    products.forEach(product => {
      product.displayDetails();
      const discount = calculateDiscount(product.price, product.discountPercentage);
      const tax = calculateTax(product.getPriceWithDiscount(), product.category);
      console.log(`Discount: $${discount.toFixed(2)} | Tax: $${tax.toFixed(2)}\n`);
    });

  } catch (error) {
    handleError(error);
  }
}

run();
