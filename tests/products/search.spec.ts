import { test, expect } from '@playwright/test';
import { ProductsPage } from '../../pages/ProductsPage';

test('Search returns no results and displays empty state', async ({ page }) => {
  const productsPage = new ProductsPage(page);
  await productsPage.goto();

  await productsPage.searchInput.fill('qwerty12345');
  await productsPage.searchInput.press('Enter');

  await expect(productsPage.productsList).toHaveCount(0);
  await expect(productsPage.catalogEmptyState).toBeVisible();
});
