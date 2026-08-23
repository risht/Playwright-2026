// Import playwright module
import { test, expect } from '@playwright/test'
import { text } from 'stream/iter';

    test('Iterating matching elements', async ({ page }) => {

        // Go to Url
        await page.goto('https://github.com/BakkappaN')

        const repos = await page.$$('.repo')

        for(const repo of repos)
        {
               const text = await repo.textContent(); 

                console.log(`Text from 1st loop :  ${text}`)

            }
console.log(`=====================================`)


        for(let index =0; index<repos.length; index++)
            {
                const text = await repos[index].textContent();

                console.log(`Text from 2nd loop :  ${text}`)
            }    

console.log(`=====================================`)

    const repository = await page.locator('.repo')
    
    const count = await repository.count()       

    console.log(`Total Repositories :  ${count}`)   
    
    for(let index =0; index<count; index++) {
        
        const text = await repository.nth(index).textContent();

        console.log(`Text from 3rd loop :  ${text}`)    
    }


    })