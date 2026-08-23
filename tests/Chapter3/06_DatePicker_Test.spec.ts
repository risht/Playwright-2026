import { test, expect } from '@playwright/test'

//Write a test

test('KeyBoard Actions', async ({ page }) => {

    // Go to Url
   await page.goto('https://jqueryui.com/datepicker/')

  //Hard Coded way to select the date 
    const iframe =  page.frameLocator('[class="demo-frame"]')

    //await iframe.locator('[id="datepicker"]').fill('12/12/2024')

    //Dynamic way to select the date

    //await iframe.locator('[id="datepicker"]').click()

    //await iframe.locator('.ui-datepicker-today').click()

    //Select past date

    // await iframe.locator('[id="datepicker"]').click()

    // await iframe.locator('[title="Prev"]').click()

    // await iframe.locator('text=10').click()

    
    //Select future date

    await iframe.locator('[id="datepicker"]').click()

    await iframe.locator('[title="Next"]').click()

    await iframe.locator('text=24').click()
})

