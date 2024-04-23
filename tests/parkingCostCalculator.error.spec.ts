import { test, expect } from '@playwright/test';
import { ParkingCostCalculator } from '../pageObjectModel/parkingCostCalculator';

test.beforeEach(async ({ page }) => {
  const parkingCostCalculator = new ParkingCostCalculator(page);
  await parkingCostCalculator.goto();
  await parkingCostCalculator.getParkingCostCaclculatorVisible();
});

test('Trigger an Error message when failed to enter Entry and Leaving Date', async ({ page }) => {
  const parkingCostCalculator = new ParkingCostCalculator(page);
  await parkingCostCalculator.calculateClick();
  await page.getByText('ERROR! Enter A Correctly').dblclick();
  await expect(page.getByText('ERROR! Enter A Correctly')).toBeVisible();
});


test('Trigger an error when entering invalid Start time', async ({ page }) => {
  const parkingCostCalculator = new ParkingCostCalculator(page);
  const entryDatePopup = page.waitForEvent('popup');
  await parkingCostCalculator.clickEntryDatePopup();
  const entryDatePopupPage = await entryDatePopup;
  await entryDatePopupPage.getByRole('cell', { name: '1', exact: true }).click();
  const leaveDatePopup = page.waitForEvent('popup');
  await parkingCostCalculator.clickLeaveDatePopup();
  const leaveDatePopupPage = await leaveDatePopup;
  await leaveDatePopupPage.getByRole('link', { name: '2', exact: true }).click();
  await page.locator('#StartingTime').click();
  await page.locator('#StartingTime').fill('ererer12:00');
  await parkingCostCalculator.calculateClick();
  await expect(page.getByText('ERROR! Your Leaving Date Or')).toBeVisible();
});

test('Trigger an error when entering invalid Leaving time ', async ({ page }) => {
  const parkingCostCalculator = new ParkingCostCalculator(page);
  const page1Promise = page.waitForEvent('popup');
  await parkingCostCalculator.clickEntryDatePopup();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: '1', exact: true }).click();
  const page2Promise = page.waitForEvent('popup');
  await parkingCostCalculator.clickLeaveDatePopup();
  const page2 = await page2Promise;
  await page2.getByRole('link', { name: '2', exact: true }).click();
  await page.locator('#LeavingTime').click();
  await page.locator('#LeavingTime').fill('dsfdsfsdafdsf');
  await parkingCostCalculator.calculateClick();
  await expect(page.getByText('ERROR! Your Leaving Date Or')).toBeVisible();
});