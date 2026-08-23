// Import playwright module
import { test, expect } from '@playwright/test'

//Write a test

test('Check Box and Radio Button Test', async ({ page }) => {

    // Go to Url
    await page.goto('https://jqueryui.com/checkboxradio/')

    const iframe = await page.frameLocator('[class="demo-frame"]')

    await expect(iframe.locator('[for="radio-1"]')).not.toBeChecked()
    
    await iframe.locator('[for="radio-1"]').check()

    await expect(iframe.locator('[for="radio-1"]')).toBeChecked()
})