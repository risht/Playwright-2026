// import { test, expect } from '@playwright/test'
// import { HomePage } from '../../src/utils/HomePage';
// import { ResultPage } from '../../src/utils/ResultPage';
// import { PlaylistPage } from '../../src/utils/PlaylistPage';

import { test } from '../../src/utils/fixture/testFixture'

//Write a test

test('Implememnting Fixtures in Playwright', async ({ page, homePage,resultPage,playlistPage}) => {

    console.log(`Test Execution Started...`)

   //Create object of homepage

    await homePage.gotoUrl()

    await homePage.searchWithKeywords(`${process.env.SEARCH_KEYWORDS}`)

   //Create object of resultpage

    await resultPage.validatePlaylistSection();

   //Create object of playlistpage

    await playlistPage.validateOnPlaylist(

    process.env.SEARCH_KEYWORDS!)

    console.log(`Test Execution ended...`)
})
