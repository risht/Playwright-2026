// Import playwright module
import { test, expect } from '@playwright/test'

//Write a test

test('Locators in Playwright', async ({ page }) => {

    // Go to Url
    //await page.goto('https://github.com/risht')

    //GetByRole

    //await page.getByRole('link',{name: 'Sign in'}).click()
    
    //GetByLabel

    //await page.getByLabel('Homepage', {exact: true}).first().click()

     //GetByAltText

    //await page.getByAltText("View risht's full-sized avatar").click()

    //GetByText

    // await page.getByText('Sign up', { exact: true }).click();

    // await page.waitForTimeout(5000);

    //GetByPlaceholder,Xpath, CSSSelectors

    await page.goto('https://www.youtube.com/@TheLallantop')

    //await page.getByPlaceholder('Search').fill('lallantop')

    //await page.locator('//input[@name="search_query"]').fill('tanmaybhatt') //-xpath

    //await page.locator('input[name="search_query"]').fill('tanmaybhatt') //-xpath

    await page.getByTitle('TheLallantop')
})
