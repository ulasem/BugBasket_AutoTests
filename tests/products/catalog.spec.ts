import { test, expect } from '@playwright/test';
import { ProductsPage } from '../../pages/ProductsPage';

test('Catalog filter by category and sort by price ascending', async ({ page }) => {
  const productsPage = new ProductsPage(page);

  await productsPage.goto();
  await productsPage.filterCategorySelect.selectOption('electronics');
  await productsPage.sortSelect.selectOption('price_asc');

  const numericPrices = await productsPage.getNumericPrices();

  for (let i = 0; i < numericPrices.length - 1; i++) {
    expect(numericPrices[i]).toBeLessThanOrEqual(numericPrices[i + 1]);
  }
});
