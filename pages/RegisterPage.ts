import { Page, Locator } from '@playwright/test';

export class RegisterPage {
  readonly page: Page;
  readonly submitButton: Locator;
  readonly emailInput: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly termsCheckbox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.submitButton = page.getByTestId('register-submit-btn');
    this.emailInput = page.getByTestId('register-email-input');
    this.firstNameInput = page.getByTestId('register-first-name-input');
    this.lastNameInput = page.getByTestId('register-last-name-input');
    this.passwordInput = page.getByTestId('register-password-input');
    this.confirmPasswordInput = page.getByTestId('register-confirm-password-input');
    this.termsCheckbox = page.getByTestId('register-terms-checkbox');
  }

  async goto() {
    await this.page.goto('/register');
  }
}
