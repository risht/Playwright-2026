// Import playwright module
import { test, expect } from '@playwright/test'

// Write a test
test('Visual Comparison with Playwright', async ({ page }) => {

    // Go to Url
    await page.goto('https://github.com/login')

    await expect(page).toHaveScreenshot('github-login.png', { fullPage: true })

    await page.locator('#login_field').fill('Rishabh Grover')

    await expect(page).toHaveScreenshot('github-login-filled.png', { fullPage: true })
})


test('Element Visual Comparison with Playwright - Filled Login Field', async ({ page }) => {

    // Go to Url
    await page.goto('https://github.com/login')

    const element = page.locator('#login_field')

    await expect(element).toHaveScreenshot('login-field.png')

    await element.fill('Rishabh Grover')

    await expect(element).toHaveScreenshot('login-field-filled.png')
})





  

