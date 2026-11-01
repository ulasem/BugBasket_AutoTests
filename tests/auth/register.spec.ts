import { test, expect } from '@playwright/test';
import { RegisterPage } from '../../pages/RegisterPage';

test('Register submit button stays disabled until form is valid', async ({ page }) => {
  const registerPage = new RegisterPage(page);
  await registerPage.goto();

  await expect(registerPage.submitButton).toBeDisabled();

  await registerPage.emailInput.fill('student@gmail.com');
  await expect(registerPage.submitButton).toBeDisabled();

  await registerPage.firstNameInput.fill('Student');
  await expect(registerPage.submitButton).toBeDisabled();

  await registerPage.lastNameInput.fill('Student');
  await expect(registerPage.submitButton).toBeDisabled();

  await registerPage.passwordInput.fill('Student123');
  await expect(registerPage.submitButton).toBeDisabled();

  await registerPage.confirmPasswordInput.fill('Student123');
  await expect(registerPage.submitButton).toBeDisabled();

  await registerPage.termsCheckbox.check();

  await expect(registerPage.submitButton).toBeEnabled();
  await registerPage.submitButton.click();
});
