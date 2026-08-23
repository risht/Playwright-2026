// Import playwright module
import { test, expect } from '@playwright/test'

//Write a test

test('Multiple Browser/Tabs in Playwright', async ({ page, browser }) => {

    // Go to Url
    await page.goto('https://www.youtube.com')

    // Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('tech with jatin')
    await page.getByRole('combobox', { name: 'Search' }).press('Enter')

    //Click on page

    await page.getByRole('link').filter({ hasText: /^$/ }).first().click()

    //Validate webpage title 
    await expect(page).toHaveTitle(/tech with jatin/i) // to find whether in uppercase and lowercase

    const context = await browser.newContext() // create new incognito browser context

    const page1 = await context.newPage() // create new page in incognito browser context

    await page1.goto('https://www.amazon.in/')

    //Create new tab in same browser context

    const newTab = await context.newPage()

    await newTab.goto('https://www.flipkart.com/')

    
})
