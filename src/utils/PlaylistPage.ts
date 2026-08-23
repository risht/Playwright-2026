import { expect, Locator, Page } from "@playwright/test";


export class PlaylistPage{

    readonly page:Page



    constructor(page:Page){

        this.page=page

        //Elements

    }


    //Methods


   async validateOnPlaylist(title: string) {
    await expect(this.page).toHaveTitle(
        new RegExp(`${title}.*- YouTube`, 'i')
    );

    }

}