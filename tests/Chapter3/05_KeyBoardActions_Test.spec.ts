import { test, expect } from '@playwright/test'

//Write a test

test('KeyBoard Actions', async ({ page }) => {

    // Go to Url
   await page.goto('https://the-internet.herokuapp.com/key_presses')

    const input = page.locator('input')

   //Enter Actions
   
    //await page.keyboard.press('A')


    // Press Enter
    //await page.keyboard.press('Enter')

    // Press Escape
    //await page.keyboard.press('Escape')


     // Enter text
    await input.fill('Rishabh')

    // Select all text
    await input.press('Control+A')

    // Copy
    await input.press('Control+C')

    // Paste
    await input.press('Control+V')




})