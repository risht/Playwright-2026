import { test, expect } from '@playwright/test'

test('Handling Dropdown list', async ({ page }) => {

    await page.goto('https://www.facebook.com')

    await page.getByText('Create new account', { exact: true }).click()

    // Open Month dropdown
    await page.locator('div').filter({ hasText: /^Month$/ }).first().click()


    //Validate all the options in the dropdown list

    const months = await page
    .getByRole('listbox')
    .first()
    .getByRole('option')
    .allTextContents()

expect(months).toEqual([
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
])

    // Select month by visible text
    await page.getByText('February', { exact: true }).click()

    
   
   

})






