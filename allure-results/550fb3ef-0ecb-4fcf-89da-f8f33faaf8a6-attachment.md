# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chapter06\01_ReadEnvFile_Test.spec.ts >> Read ENV file config in playwright
- Location: tests\Chapter06\01_ReadEnvFile_Test.spec.ts:6:5

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "undefined", waiting until "load"

```

# Test source

```ts
  1  | // Import playwright module
  2  | import { test, expect } from '@playwright/test'
  3  | 
  4  | //Write a test
  5  | 
  6  | test('Read ENV file config in playwright', async ({ page }) => {
  7  | 
  8  |     // Go to Url
> 9  |     await page.goto(`${process.env.url}`)
     |                ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  10 | 
  11 |     // Search with keywords
  12 |     await page.getByRole('combobox', { name: 'Search' }).fill('tech with jatin')
  13 |     await page.getByRole('combobox', { name: 'Search' }).press('Enter')
  14 | 
  15 |     //Click on page
  16 | 
  17 |     await page.getByRole('link').filter({ hasText: /^$/ }).first().click()
  18 | 
  19 |     //Validate webpage title 
  20 |     await expect(page).toHaveTitle(/tech with jatin/i) // to find whether in uppercase and lowercase
  21 | 
  22 |     
  23 | })
```