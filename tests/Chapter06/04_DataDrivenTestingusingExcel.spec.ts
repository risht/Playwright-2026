// Import playwright module
import { test, expect } from '@playwright/test'

import path from 'path';


import {readExcelFile} from '../../src/utils/ExcelHelper'

const filePath = path.join(__dirname,'../../test-data/qa/TestData.xlsx')

const records = readExcelFile(filePath)



for(const record of records)
{
    test(`Data Driven Testing using CSV file in playwright : ${record.Skill1}`, async ({ page }) => {

    // Go to Url
    await page.goto('https://www.youtube.com')

    // Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill(record.Skill1)
    await page.getByRole('combobox', { name: 'Search' }).press('Enter')

    //Click on page

    await page.getByRole('link').filter({ hasText: /^$/ }).first().click()

    //Validate webpage title 
    await expect(page).toHaveTitle(new RegExp(record.Skill1, 'i')) // to find whether in uppercase and lowercase

    
    })  

}




    

