import { test, expect } from '@playwright/test';

test('Codegen test case', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('lallantop');
  await page.goto('https://www.youtube.com/@TheLallantop');
  await expect(page.locator('.dynamicTextViewModelH1 > .ytAttributedStringHost')).toBeVisible();
});