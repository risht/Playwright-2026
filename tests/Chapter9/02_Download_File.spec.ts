import { expect, test } from '@playwright/test';
import { downloadAndValidateFileName, loginToApplication } from '../../src/utils/Common';
import path from 'path';

test('Download file in playwright', async({page}) => {

await loginToApplication(page)

await downloadAndValidateFileName(page, 'Download Excel', 'TestersTalk.xlsx')

await downloadAndValidateFileName(page, 'Download Word', 'TestersTalk.docx')

await downloadAndValidateFileName(page, 'Download XML', 'TestersTalk.xml')

await downloadAndValidateFileName(page, 'Download PDF', 'TestersTalk.pdf')
 

})