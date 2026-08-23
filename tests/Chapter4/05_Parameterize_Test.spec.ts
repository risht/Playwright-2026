// Import playwright module
import { test, expect } from '@playwright/test'

const searchKeywords = ['tech with jatin', 'tech with jatin youtube', 'Tech With Jatin latest video']

//Write a test

for(const searchKeyword of searchKeywords) {

test(`Parameterized Test for keyword: ${searchKeyword}`, async ({ page }) => {

    // Go to Url
    await page.goto('https://www.youtube.com')

    // Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill(searchKeyword)
    await page.getByRole('combobox', { name: 'Search' }).press('Enter')

    //Click on page

    await page.getByRole('link').filter({ hasText: /^$/ }).first().click()

    //Validate webpage title 
    await expect(page).toHaveTitle(new RegExp(searchKeyword, 'i')) // to find whether in uppercase and lowercase


})

    
    

}