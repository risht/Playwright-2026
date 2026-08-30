// Import playwright module
import { test, expect } from '@playwright/test'

//Write a test

test('Mock API requesr in playwright', async ({ page }) => {

    //Mock API Request

    await page.route('*/**/api/v1/fruits', async route=>{

        const json = [

            {name: 'tomato and veggies', id : 12 },
            {name: 'mushroom and veggies', id : 13 },
            {name: 'chicken and veggies', id : 14 },
            {name: 'eggs and veggies', id : 15 },
        ]

        await route.fulfill({ json });

    })


    //Go to URL

    await page.goto('https://demo.playwright.dev/api-mocking/')

    //Validate text
    await expect(page.getByText('tomato and veggies')).toBeVisible()
    await expect(page.getByText('mushroom and veggies')).toBeVisible()
    await expect(page.getByText('chicken and veggies')).toBeVisible()
    await expect(page.getByText('eggs and veggies')).toBeVisible()


})

