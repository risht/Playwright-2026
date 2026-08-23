// Import playwright module
import { test, expect } from '@playwright/test'

//Write a test

test('Read ENV file config in playwright', async ({ page }) => {

    // Go to Url
    await page.goto(`${process.env.url}`)

    // Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('tech with jatin')
    await page.getByRole('combobox', { name: 'Search' }).press('Enter')

    //Click on page

    await page.getByRole('link').filter({ hasText: /^$/ }).first().click()

    //Validate webpage title 
    await expect(page).toHaveTitle(/tech with jatin/i) // to find whether in uppercase and lowercase

    
})