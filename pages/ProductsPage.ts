import { Page, Locator } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly addToCartBtn: Locator;
  readonly toastSuccess: Locator;
  readonly cartBadge: Locator;
  readonly filterCategorySelect: Locator;
  readonly sortSelect: Locator;
  readonly productPrices: Locator;
  readonly searchInput: Locator;
  readonly productsList: Locator;
  readonly catalogEmptyState: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartBtn = page.getByRole('button', { name: 'Add Board Game: Bug Hunt! to cart' });
    this.toastSuccess = page.getByTestId('toast-success');
    this.cartBadge = page.getByTestId('cart-badge');
    this.filterCategorySelect = page.getByTestId('filter-category-select');
    this.sortSelect = page.getByTestId('sort-select');
    this.productPrices = page.locator('.product-card .product-card-price');
    this.searchInput = page.getByTestId('search-input');
    this.productsList = page.getByTestId('product-grid');
    this.catalogEmptyState = page.getByTestId('catalog-empty-state');
  }

  async goto() {
    await this.page.goto('/products');
  }

  async addProductToCart() {
    await this.addToCartBtn.click();
  }

  async getNumericPrices(): Promise<number[]> {
    const prices = await this.productPrices.allTextContents();
    return prices.map(p => parseFloat(p.replace(/[^0-9.]/g, '')));
  }
}
