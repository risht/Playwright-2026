import { test, expect } from '@playwright/test'

//Write a test

test('Assertions Test', async ({ page }) => {

    // Go to Url
   await page.goto('https://www.youtube.com/')

   //visible,editable,enabled,empty
   await expect(page.getByPlaceholder('Search',{exact: true}).first()).toBeVisible()
    await expect(page.getByPlaceholder('Search',{exact: true}).first()).toBeEditable()
    await expect(page.getByPlaceholder('Search',{exact: true}).first()).toBeEnabled()
    await expect(page.getByPlaceholder('Search',{exact: true}).first()).toBeEmpty()

    //VerifyURL,title,text,count

    await page.getByPlaceholder('Search',{exact: true}).first().click() 
    await page.getByPlaceholder('Search',{exact: true}).first().fill('lallantop')
    await page.getByPlaceholder('Search',{exact: true}).first().press('Enter')
    await expect(page).toHaveURL(/.*search_query=lallantop.*/)
    await expect(page).toHaveTitle(/.*lallantop.*/)
    await expect(page.getByText('The Lallantop', { exact: true }).first()).toHaveText('The Lallantop')
    console.log(await page.locator('a[href="/@TheLallantop"]').count())

    console.log(await page.locator('a#main-link[href="/@TheLallantop"]').count())

    await expect(page.locator('ytd-channel-renderer').filter({ hasText: 'The Lallantop' })).toHaveCount(1)
    await expect(page.locator('ytd-channel-renderer').filter({ hasText: 'The Lallantop' })).toContainText('The Lallantop')



})  