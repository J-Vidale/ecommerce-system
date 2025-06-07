
// 3. src/utils/taxCalculator.ts
export function calculateTax(price: number, category: string): number {
  const standardRate = 0.0475;
  const groceryRate = 0.03;
  const taxRate = category.toLowerCase() === 'groceries' ? groceryRate : standardRate;
  return price * taxRate;
}