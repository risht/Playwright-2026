import { expect, test } from '@playwright/test'
import { downloadAndValidateFileName, loginToApplication } from '../../src/utils/Common'

import fs from 'fs'
import { XMLParser } from 'fast-xml-parser'

test('Validate downloaded XML file content in playwright', async ({ page }) => {

    const DOWNLOADED_XML_FILE = './downloads/TestersTalk.xml'

    // Login to Testers Talk
    await loginToApplication(page)

    // Download XML file & validate filename
    await downloadAndValidateFileName(
        page,
        'Download XML',
        'TestersTalk.xml'
    )

    // Read downloaded XML file
    const data = fs.readFileSync(
        DOWNLOADED_XML_FILE,
        'utf-8'
    )

    // Parse XML
    const parser = new XMLParser({
        ignoreAttributes: false
    })

    const xmlText = parser.parse(data)

    console.log(
        JSON.stringify(xmlText, null, 2)
    )

    // Validate Testers Talk YouTube link
    const youtubeLink =
        xmlText.testersTalk.channel.url

    expect(youtubeLink)
        .toBe('https://www.youtube.com/@testerstalk')

    // Get playlists
    const playlists =
        xmlText.testersTalk.channel.playlists.playlist

    // Find Playwright TypeScript playlist
    const playwrightTSPlaylist = playlists.find(
        (p: any) =>
            p.title === 'Playwright TypeScript by Testers Talk'
    )

    console.log(
        JSON.stringify(playwrightTSPlaylist, null, 2)
    )

    // Validate playlist exists
    expect(playwrightTSPlaylist)
        .toBeDefined()

    // Validate playlist title
    expect(playwrightTSPlaylist.title)
        .toBe('Playwright TypeScript by Testers Talk')

    // Validate playlist URL
    expect(playwrightTSPlaylist.url)
        .toBe(
            'https://youtube.com/playlist?list=PLUeDIlio4THEXmQxNvKmdDxAVloGTHXMr&feature=shared'
        )
})