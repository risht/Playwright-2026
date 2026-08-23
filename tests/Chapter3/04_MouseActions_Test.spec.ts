// Import playwright module
import { test, expect } from '@playwright/test'

//Write a test

test('Mouse Actions', async ({ page }) => {

    // Go to Url
   await page.goto('https://www.amazon.in/')
   
   await page.getByRole('button', { name: 'Continue shopping' }).click()

   await page.getByText('Account & Lists').hover()

    await page.getByRole('button', { name: 'Expand Account and Lists' }).click()

    await page.locator('#nav_prefetch_yourorders').click()

})
