import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.describe('Login Functionality', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('user can log in with a demo account', async ({ page }) => {
    await loginPage.login('student1@bugbasket.test', 'Student123');

    await expect(loginPage.logoutButton).toBeVisible();
    await expect(page).toHaveURL('/');
  });

  test('unknown user sees a generic error', async () => {
    await loginPage.login('nobody@bugbasket.test', 'WrongPassword1');

    await expect(loginPage.errorMessage).toHaveText('Invalid email or password');
  });
});
