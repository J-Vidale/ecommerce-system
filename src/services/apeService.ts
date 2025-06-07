
// 5. src/services/apiService.ts
import axios from 'axios';
import { Product } from '../models/Product';
import { CustomError } from '../utils/errorHandler';

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    const data = response.data as { products: any[] };
    return data.products.map((p: any) => new Product(
      p.id, p.title, p.price, p.discountPercentage, p.category, p.description, p.brand
    ));
  } catch (error) {
    throw new CustomError('Failed to fetch products.');
  }
}
