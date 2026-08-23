// Import playwright module
import { test, expect } from '@playwright/test'

    test('Get Text & Get Attribute', async ({ page }) => {

        // Go to Url
        await page.goto('https://github.com/BakkappaN')

        const name = await page.locator('[itemprop="name"]').innerText()
        const finalname  = name?.trim();

        console.log(`Name is :  ${finalname}`)
       
        expect(finalname).toBe('Testers Talk')

       


    })