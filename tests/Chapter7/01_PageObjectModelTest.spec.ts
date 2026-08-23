// Import playwright module
import { test, expect } from '@playwright/test'
import { HomePage } from '../../src/utils/HomePage';
import { ResultPage } from '../../src/utils/ResultPage';
import { PlaylistPage } from '../../src/utils/PlaylistPage';

//Write a test

test('Page Object Model in Playwright', async ({ page }) => {

    console.log("Test Execution Started")

   //Create object of homepage

    const homePage = new HomePage(page)

    await homePage.gotoUrl()

    await homePage.searchWithKeywords(`${process.env.SEARCH_KEYWORDS}`)

   //Create object of resultpage

    const resultPage = new ResultPage(page);

    await resultPage.validatePlaylistSection();


   //Create object of playlistpage

    const playlistPage = new PlaylistPage(page)

    await playlistPage.validateOnPlaylist(

    process.env.SEARCH_KEYWORDS!
)

})



