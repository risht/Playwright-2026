// Import playwright module
import { test, expect } from '@playwright/test'

//Write a test

test('Handling IFrames, Drag and Drop', async ({ page }) => {

    // Go to Url
    await page.goto('https://jqueryui.com/droppable/')

    const iframe = page.frameLocator('[class="demo-frame"]')

    // drag element, drop element 

   const draggable = iframe.locator('[id="draggable"]')
   const droppable = iframe.locator('[id="droppable"]')
   
   await draggable.dragTo(droppable)


})