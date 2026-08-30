import { Locator, Page } from "playwright";


export class HomePage{

    readonly page:Page

    readonly searchTextBox:Locator

    constructor(page:Page){

        this.page=page

        //Elements

        this.searchTextBox = page.getByRole('combobox', { name: 'Search' });


    }


    //Methods

    //1) go to url

    async gotoUrl()
    {

        if (process.env.TEST_EXECUTION_ENV == 'qa') {
            await this.page.goto(`${process.env.url}`);
            console.log(`Tests are running in ${process.env.TEST_EXECUTION_ENV} env.`)
        } else if (process.env.TEST_EXECUTION_ENV == 'dev') {
            await this.page.goto(`${process.env.url}`);
            console.log(`Tests are running in ${process.env.TEST_EXECUTION_ENV} env.`)
        }
        
    }

    async searchWithKeywords(keyword:string)
    {
        await this.searchTextBox.click()
        
        await this.searchTextBox.fill(keyword)

        await this.searchTextBox.press('Enter')
    }

}