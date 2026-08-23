// Import playwright module
import { test, expect } from '@playwright/test'

//Write a test

test('Capture screenshots in playwright', async ({ page }) => {

    // Go to Url
    await page.goto('https://www.youtube.com/@TheLallantop')

    //Capture element screenshot 

    await page.locator('#page-header-banner-sizer').screenshot({path : './screenshots/ElementScreenshot.png'})

    //Page screenshot

    await page.screenshot({path : './screenshots/PageScreenshot.png'})



    //Full page screenshot

     await page.screenshot({path : './screenshots/FullPageScreenshot.png', fullPage:true})

    
})

