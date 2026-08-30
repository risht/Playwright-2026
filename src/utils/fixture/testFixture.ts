
import {test as base } from '@playwright/test'
import { HomePage } from '../HomePage';
import { ResultPage } from '../ResultPage';
import { PlaylistPage } from '../PlaylistPage';

import { loadTestData } from '../JsonHelper';

import {TestData} from '../../utils/interface/ModuleTestDatainterface'


export const test = base.extend<{ 
    
    saveLogs: void;

    homePage:HomePage;
    
    resultPage:ResultPage;

    playlistPage:PlaylistPage

    testData:TestData


}>({

    saveLogs: [async ({ }, use) =>{

    console.log('Global before is running...')

    await use();

    console.log('Global afterEach is running...')

    },


    {auto: true}],

    homePage: async ({page }, use) => {

        const homepage = new HomePage(page)

        await use(homepage)

    },

      resultPage: async ({page }, use) => {

        const resultpage = new ResultPage(page)

        await use(resultpage)
      
    },

        playlistPage: async ({page }, use) => {

        const playlistpage = new PlaylistPage(page)

        await use(playlistpage)
    
    },
        testData: async ({}, use) => {

        const data = await loadTestData()

        await use(data)
        

    }




});