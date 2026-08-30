import { expect, type Page } from '@playwright/test';

export async function loginToApplication(page: Page) {
    await page.goto('https://bakkappan.github.io/Testers-Talk-Practice-Site');
    await expect(page.locator('#siteHeader')).toContainText('Testers Talk: A Practice Space for Passionate QA Minds');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('TestersTalk');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('TestersTalk');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Welcome to Testers Talk!')).toBeVisible();
    await expect(page.locator('#welcomeMsg')).toContainText('Welcome to Testers Talk!');
}

export async function downloadAndValidateFileName(
    page: Page,
    Btn: string,
    expectedFileName: string
) {
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('link', { name: Btn }).click()
    ])

    const downloadedFileName = download.suggestedFilename()

    console.log('Downloaded filename: ' + downloadedFileName)

    // Validate filename
    expect(downloadedFileName).toBe(expectedFileName)

    // Save file using its original filename
    await download.saveAs(
        `./downloads/${downloadedFileName}`
    )

    console.log('File saved: ' + downloadedFileName)
}