import { test, expect } from '@playwright/test';
import { ProductsPage } from '../../pages/ProductsPage';
import { CartPage } from '../../pages/CartPage';

test('Guest adds a product to cart', async ({ page }) => {
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  await productsPage.goto();
  await productsPage.addProductToCart();

  await expect(productsPage.toastSuccess).toBeVisible();
  await expect(productsPage.cartBadge).toHaveText('1');

  await cartPage.goto();
  await expect(cartPage.cartLines).toBeVisible();
  await expect(cartPage.cartLines).toHaveCount(1);
});
