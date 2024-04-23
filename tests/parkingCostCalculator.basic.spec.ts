import { test, expect } from '@playwright/test';
import { ParkingCostCalculator } from '../pageObjectModel/parkingCostCalculator';

test.beforeEach(async ({ page }) => {
    const parkingCostCalculator = new ParkingCostCalculator(page);
    await parkingCostCalculator.goto();
    await parkingCostCalculator.getParkingCostCaclculatorVisible();
});

test('Calculating One Day Valet Parking Rate', async ({ page }) => {
    const parkingCostCalculator = new ParkingCostCalculator(page);
    parkingCostCalculator.setParkingLotSelectorOption('Valet');
    const entryDatePopup = page.waitForEvent('popup');
    await parkingCostCalculator.clickEntryDatePopup();
    const entryDatePopupPage = await entryDatePopup;
    await entryDatePopupPage.getByRole('cell', { name: '1', exact: true }).click();
    const leaveDatePopup = page.waitForEvent('popup');
    await parkingCostCalculator.clickLeaveDatePopup();
    const leaveDatePopupPage = await leaveDatePopup;
    await leaveDatePopupPage.getByRole('link', { name: '2', exact: true }).click();
    await parkingCostCalculator.calculateClick();
    await expect(page.getByText('$ 18.00')).toContainText('$ 18.00');
    await expect(page.getByText('(1 Days, 0 Hours, 0 Minutes)')).toBeVisible();
});

test('Calculating One Day Short Term Parking Rate', async ({ page }) => {
    const parkingCostCalculator = new ParkingCostCalculator(page);
    parkingCostCalculator.setParkingLotSelectorOption('Short');
    const entryDatePopup = page.waitForEvent('popup');
    await parkingCostCalculator.clickEntryDatePopup();
    const entryDatePopupPage = await entryDatePopup;
    await entryDatePopupPage.getByRole('link', { name: '1', exact: true }).click();
    const leaveDatePopup = page.waitForEvent('popup');
    await parkingCostCalculator.clickLeaveDatePopup();
    const leaveDatePopupPage = await leaveDatePopup;
    await leaveDatePopupPage.getByRole('link', { name: '2', exact: true }).click();
    await parkingCostCalculator.calculateClick();
    await expect(page.getByText('$ 24.00')).toContainText('$ 24.00');
    await expect(page.getByText('(1 Days, 0 Hours, 0 Minutes)')).toBeVisible();
});

test('Calculating One Day Economy Lot Parking Rate', async ({ page }) => {
    const parkingCostCalculator = new ParkingCostCalculator(page);
    parkingCostCalculator.setParkingLotSelectorOption('Economy');
    const entryDatePopup = page.waitForEvent('popup');
    await parkingCostCalculator.clickEntryDatePopup();
    const entryDatePopupPage = await entryDatePopup;
    await entryDatePopupPage.getByRole('link', { name: '1', exact: true }).click();
    const leaveDatePopup = page.waitForEvent('popup');
    await parkingCostCalculator.clickLeaveDatePopup();
    const leaveDatePopupPage = await leaveDatePopup;
    await leaveDatePopupPage.getByRole('link', { name: '2', exact: true }).click();
    await parkingCostCalculator.calculateClick();
    await expect(page.getByText('$ 9.00')).toBeVisible();
    await expect(page.getByText('(1 Days, 0 Hours, 0 Minutes)')).toBeVisible();
});