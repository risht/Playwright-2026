// Import playwright module
import { test, expect } from '@playwright/test'

//Write a test

test('Mock API response in playwright', async ({ page }) => {

    //Mock API Response

    await page.route('*/**/api/v1/fruits', async route=>{


        const response = await route.fetch();
        const json = await response.json()

        json.push({name: 'tomato and veggies', id : 12 })
        json.push({name: 'mushroom and veggies', id : 13 })
        json.push({name: 'chicken and veggies', id : 14 })
        json.push({name: 'eggs and veggies', id : 15 })

        await route.fulfill({ response , json });

    })


    //Go to URL

    await page.goto('https://demo.playwright.dev/api-mocking/')

    //Validate text
    await expect(page.getByText('tomato and veggies')).toBeVisible()
    await expect(page.getByText('mushroom and veggies')).toBeVisible()
    await expect(page.getByText('chicken and veggies')).toBeVisible()
    await expect(page.getByText('eggs and veggies')).toBeVisible()


})

