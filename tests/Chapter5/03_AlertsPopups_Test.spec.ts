// Import playwright module
import { test, expect } from '@playwright/test'

//Write a test

test('Handling Alerts Popups ', async ({ page }) => {

    // Go to Url
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/')

    page.once('dialog', async dialog => {

        await dialog.accept() // to accept the alert

        
        console.log(`Dialog message: ${dialog.message()}`) // to print the alert message
        console.log(`Dialog type: ${dialog.type()}`)
        
        // await dialog.dismiss() // to dismiss the alert
    })

        await page.getByText('See an example alert', {exact : true}).click()
    
})

//Write a test

test('Handling Popups in Playwright ', async ({ page }) => {

    // Go to Url
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/')

    page.once('dialog', async dialog => {

        //await dialog.accept() // to accept the alert

       
        console.log(`Dialog message: ${dialog.message()}`) // to print the alert message
        console.log(`Dialog type: ${dialog.type()}`) // to print the dialog type
        
         await dialog.dismiss() // to dismiss the alert
    })

        await page.getByText(' See a sample confirm', {exact : true}).click()
    
})



test('Handling Prompts in Playwright ', async ({ page }) => {

    // Go to Url
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/')

    page.once('dialog', async dialog => {
       
        console.log(`Dialog message: ${dialog.message()}`) // to print the alert message
        console.log(`Dialog type: ${dialog.type()}`) // to print the dialog type

        await dialog.accept('Rishabh') // to accept the alert and send text to prompt    
    
    })

        await page.getByText(' See a sample prompt', {exact : true}).click()
    
})






