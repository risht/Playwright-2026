// Import playwright module
import { test, expect } from '@playwright/test'

import testData from '../../test-data/qa/testdata.json';

type TestData = {
    

    "TestDataSet1":{

        Skill1:string,
        Skill2:string

    },

    "TestDataSet2":{

        Skill1:string,
        Skill2:string

    },


}


const typedTestData = testData as TestData;


for(const dataSet in typedTestData){

   const skill =  typedTestData[dataSet as keyof TestData] // Type assertion to access the properties of TestData
    
   test(`Data Driven Testing using JSON file in playwright : ${skill.Skill1}`, async ({ page }) => {

    // Go to Url
    await page.goto('https://www.youtube.com')

    // Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill(skill.Skill1)
    await page.getByRole('combobox', { name: 'Search' }).press('Enter')

    //Click on page

    await page.getByRole('link').filter({ hasText: /^$/ }).first().click()

    //Validate webpage title 
    await expect(page).toHaveTitle(new RegExp(skill.Skill2, 'i')) // to find whether in uppercase and lowercase

    
    })  


}



    

