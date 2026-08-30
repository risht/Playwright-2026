import { expect, test } from '@playwright/test';
import { loginToApplication } from '../../src/utils/Common';
import path from 'path';

test('Upload file in playwright ', async ({ page }) => {

  const fileInput = page.locator('#fileInput');

  await loginToApplication(page);

  await expect(fileInput).toBeVisible();

  await fileInput.setInputFiles(path.join(__dirname, '../../uploads/upload_file.json'))

  await expect(page.getByText('Selected: upload_file.json')).toBeVisible()

});