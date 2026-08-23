// Import playwright module
import { test, expect } from '@playwright/test'

//Write a test

test('Record at cursor test', async ({ page }) => {

    // Go to Url
    await page.goto('https://www.youtube.com')

    // Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('tech with jatin')
    await page.getByRole('combobox', { name: 'Search' }).press('Enter')

    //Click on page

    await page.getByRole('link').filter({ hasText: /^$/ }).first().click()

    //Validate webpage title 
    await expect(page).toHaveTitle(/tech with jatin/i) // to find whether in uppercase and lowercase
    
    await page.getByRole('button', { name: 'and 5 more links' }).click();
    await page.getByRole('button', { name: 'Close' }).click();

    await page.getByRole('link', { name: 'Lets CRACK your next SDET' }).click();
    
    await expect(page.getByRole('link', { name: '[IMPORTANT] How to Download' })).toBeVisible();

    await expect(page.getByRole('link', { name: 'Want to Crack SDET Interviews' })).toBeVisible();



})