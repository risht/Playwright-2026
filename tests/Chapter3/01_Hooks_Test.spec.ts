// Import playwright module
import {test, expect} from '@playwright/test'

test.beforeAll(async({}) => {

    console.log("Running before all tests..")
})

test.beforeEach(async( { page } ) => {

    console.log("Running before each test..")
    await page.goto('https://www.youtube.com')

})

test.afterEach(async() => {

    console.log("Running after each test..")
})

test.afterAll(async() => {

    console.log("Running after all tests..")
})



//Test 1

test('Test1', async ({ page }) => {

    console.log("Test 1 is running..")

    // Go to Url
    // await page.goto('https://www.youtube.com')

    // Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('tech with jatin')
    await page.getByRole('combobox', { name: 'Search' }).press('Enter')

    //Click on page

    await page.getByRole('link').filter({ hasText: /^$/ }).first().click()

    //Validate webpage title 
    await expect(page).toHaveTitle(/tech with jatin/i) // to find whether in uppercase and lowercase

    
})

//Test 2
test('Test2', async ({ page }) => {

    console.log("Test 2 is running..")

    // Go to URL
    // await page.goto('https://www.youtube.com')

    // Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('tech with jatin')
    await page.getByRole('combobox', { name: 'Search' })
        .press('Enter')

    // Click on page
    await page.getByRole('link').filter({ hasText: /^$/ }).first().click()

    // Validate webpage title
    await expect(page).toHaveTitle(/tech with jatin/i)

})
 