import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartLines: Locator;
  readonly promoInput: Locator;
  readonly promoApplyBtn: Locator;
  readonly promoApplied: Locator;
  readonly promoError: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartLines = page.getByTestId('cart-lines');
    this.promoInput = page.getByTestId('promo-input');
    this.promoApplyBtn = page.getByTestId('promo-apply-btn');
    this.promoApplied = page.getByTestId('promo-applied');
    this.promoError = page.getByTestId('promo-error');
  }

  async goto() {
    await this.page.goto('/cart');
  }

  async applyPromoCode(code: string) {
    await this.promoInput.fill(code);
    await this.promoApplyBtn.click();
  }
}
