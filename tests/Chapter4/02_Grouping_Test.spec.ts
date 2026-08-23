// Import playwright module
import { test, expect } from '@playwright/test'

test.describe('Smoke Test', () => {

    test('Test1', async ({ page }) => {

        // Go to Url
        await page.goto('https://www.youtube.com')

        // Search with keywords
        await page.getByRole('combobox', { name: 'Search' }).fill('tech with jatin')
        await page.getByRole('combobox', { name: 'Search' }).press('Enter')

        //Click on page

        await page.getByRole('link').filter({ hasText: /^$/ }).first().click()

        //Validate webpage title 
        await expect(page).toHaveTitle(/tech with jatin/i) // to find whether in uppercase and lowercase


    })

})


test.describe('Regression Test', () => {

    test('Test2', async ({ page }) => {

        // Go to Url
        await page.goto('https://www.youtube.com')

        // Search with keywordsc
        await page.getByRole('combobox', { name: 'Search' }).fill('tech with jatin')
        await page.getByRole('combobox', { name: 'Search' }).press('Enter')

        //Click on page

        await page.getByRole('link').filter({ hasText: /^$/ }).first().click()

        //Validate webpage title 
        await expect(page).toHaveTitle(/tech with jatin/i) // to find whether in uppercase and lowercase


    })

    test('Test3', async ({ page }) => {

        // Go to Url
        await page.goto('https://www.youtube.com')

        // Search with keywordsc
        await page.getByRole('combobox', { name: 'Search' }).fill('tech with jatin')
        await page.getByRole('combobox', { name: 'Search' }).press('Enter')

        //Click on page

        await page.getByRole('link').filter({ hasText: /^$/ }).first().click()

        //Validate webpage title 
        await expect(page).toHaveTitle(/tech with jatin/i) // to find whether in uppercase and lowercase


    })

})






