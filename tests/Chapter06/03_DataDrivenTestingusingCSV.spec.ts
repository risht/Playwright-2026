// Import playwright module
import { test, expect } from '@playwright/test'

import { parse } from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';

type TestRecords = {

    Skill1 : string,
    Skill2 : string

}   


const records = parse(

    fs.readFileSync(path.join(__dirname,'../../test-data/qa/testdata.csv')),
    {

        columns: true,
        skipEmptyLines:true


    }

) as TestRecords[];

for(const record of records)
{
    test(`Data Driven Testing using CSV file in playwright : ${record.Skill2}`, async ({ page }) => {

    // Go to Url
    await page.goto('https://www.youtube.com')

    // Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill(record.Skill2)
    await page.getByRole('combobox', { name: 'Search' }).press('Enter')

    //Click on page

    await page.getByRole('link').filter({ hasText: /^$/ }).first().click()

    //Validate webpage title 
    await expect(page).toHaveTitle(new RegExp(record.Skill2, 'i')) // to find whether in uppercase and lowercase

    
    })  

}




    

