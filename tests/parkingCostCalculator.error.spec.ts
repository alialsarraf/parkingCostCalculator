import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.shino.de/parkcalc/');
});

test('Trigger an Error message when failed to enter Entry and Leaving Date', async ({ page }) => {
  expect(page.url()).toBe('https://www.shino.de/parkcalc/');
  await page.getByRole('button', { name: 'Calculate' }).click();
  await page.getByText('ERROR! Enter A Correctly').dblclick();
  await expect(page.getByText('ERROR! Enter A Correctly')).toBeVisible();
});


test('Trigger an error when entering invalid Start time', async ({ page }) => {
  expect(page.url()).toBe('https://www.shino.de/parkcalc/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('row', { name: 'Please input entry date and' }).getByRole('link').click();
  const page1 = await page1Promise;
  await page1.getByRole('cell', { name: '1', exact: true }).click();
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('row', { name: 'Please input leaving date and' }).getByRole('link').click();
  const page2 = await page2Promise;
  await page2.getByRole('link', { name: '2', exact: true }).click();
  await page.locator('#StartingTime').click();
  await page.locator('#StartingTime').click();
  await page.locator('#StartingTime').click();
  await page.locator('#StartingTime').press('ArrowLeft');
  await page.locator('#StartingTime').press('ArrowLeft');
  await page.locator('#StartingTime').press('ArrowLeft');
  await page.locator('#StartingTime').press('ArrowLeft');
  await page.locator('#StartingTime').press('ArrowLeft');
  await page.locator('#StartingTime').press('ArrowLeft');
  await page.locator('#StartingTime').fill('ererer12:00');
  await page.getByRole('button', { name: 'Calculate' }).click();
  await expect(page.getByText('ERROR! Your Leaving Date Or')).toBeVisible();
});

test('Trigger an error when entering invalid Leaving time ', async ({ page }) => {
  expect(page.url()).toBe('https://www.shino.de/parkcalc/');
  await page.locator('#StartingDate').click();
  await page.locator('#StartingTime').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('row', { name: 'Please input entry date and' }).getByRole('link').click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: '1', exact: true }).click();
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('row', { name: 'Please input leaving date and' }).getByRole('link').click();
  const page2 = await page2Promise;
  await page2.getByRole('link', { name: '2', exact: true }).click();
  await page.locator('#LeavingTime').click();
  await page.locator('#LeavingTime').click();
  await page.locator('#LeavingTime').fill('dsfdsfsdafdsf');
  await page.getByRole('button', { name: 'Calculate' }).click();
  await expect(page.getByText('ERROR! Your Leaving Date Or')).toBeVisible();
});