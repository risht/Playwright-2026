import { test } from '../../src/utils/fixture/testFixture'

//Write a test

test('Implememnting Fixtures in Playwright', async ({ page, homePage,resultPage,playlistPage, testData}) => {

    console.log(`Test Execution Started...`)

   //Create object of homepage

    await homePage.gotoUrl()

    await homePage.searchWithKeywords(String(testData.Module1TestData?.Skill2))

   //Create object of resultpage

    await resultPage.validatePlaylistSection()

   //Create object of playlistpage

    await playlistPage.validateOnPlaylist(String(testData.Module1TestData?.Skill2))

    console.log(`Skill: # ${String(testData.Module1TestData?.Skill1)}`)

    console.log(`Skill: # ${String(testData.Module1TestData?.Skill2)}`)

    console.log(`Skill: # ${String(testData.Module1TestData?.Skill3)}`)

})
