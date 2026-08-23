// Import playwright module
import { test, expect } from '@playwright/test'
import { HomePage } from '../../src/utils/pages/HomePage';
import { ResultPage } from '../../src/utils/pages/ResultPage';
import { PlaylistPage } from '../../src/utils/pages/PlaylistPage';

//Write a test

test('Page Object Model in Playwright', async ({ page }) => {

    console.log("Test execution started")

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



