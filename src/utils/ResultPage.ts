import { expect, Page } from "@playwright/test";


export class ResultPage{

    readonly page:Page



    constructor(page:Page){

        this.page=page

        //Elements

    }


    //Methods


   async validatePlaylistSection() {

       
        await this.page
            .getByRole('link', { name: 'View full playlist' })
            .first()
            .click();


}

}