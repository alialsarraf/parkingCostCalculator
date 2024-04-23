import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.shino.de/parkcalc/');
});

test('Calculating One Day Valet Parking Rate', async ({ page }) => {
    expect(page.url()).toBe('https://www.shino.de/parkcalc/');
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('row', { name: 'Please input entry date and' }).getByRole('link').click();
    const page1 = await page1Promise;
    await page1.getByRole('cell', { name: '1', exact: true }).click();
    const page2Promise = page.waitForEvent('popup');
    await page.getByRole('row', { name: 'Please input leaving date and' }).getByRole('link').click();
    const page2 = await page2Promise;
    await page2.getByRole('link', { name: '2', exact: true }).click();
    await page.getByRole('button', { name: 'Calculate' }).click();
    await expect(page.getByText('$ 18.00')).toContainText('$ 18.00');
    await expect(page.getByText('(1 Days, 0 Hours, 0 Minutes)')).toBeVisible();
});

test('Calculating One Day Short Term Parking Rate', async ({ page }) => {
    expect(page.url()).toBe('https://www.shino.de/parkcalc/');
    await page.locator('#ParkingLot').selectOption('Short');
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('row', { name: 'Please input entry date and' }).getByRole('link').click();
    const page1 = await page1Promise;
    await page1.getByRole('link', { name: '1', exact: true }).click();
    const page2Promise = page.waitForEvent('popup');
    await page.getByRole('row', { name: 'Please input leaving date and' }).getByRole('link').click();
    const page2 = await page2Promise;
    await page2.getByRole('link', { name: '2', exact: true }).click();
    await page.locator('#LeavingTime').click();
    await page.locator('#LeavingTime').dblclick();
    await page.locator('#LeavingTime').fill('12:00');
    await page.locator('#LeavingTime').click();
    await page.locator('#LeavingTime').fill('12:00');
    await page.getByRole('button', { name: 'Calculate' }).click();
    await expect(page.getByText('$ 24.00')).toContainText('$ 24.00');
    await expect(page.getByText('(1 Days, 0 Hours, 0 Minutes)')).toBeVisible();
});

test('Calculating One Day Economy Lot Parking Rate', async ({ page }) => {
    expect(page.url()).toBe('https://www.shino.de/parkcalc/');
    await page.locator('#ParkingLot').selectOption('Economy');
    const page5Promise = page.waitForEvent('popup');
    await page.getByRole('row', { name: 'Please input entry date and' }).getByRole('link').click();
    const page5 = await page5Promise;
    await page5.getByRole('link', { name: '1', exact: true }).click();
    const page6Promise = page.waitForEvent('popup');
    await page.getByRole('row', { name: 'Please input leaving date and' }).getByRole('link').click();
    const page6 = await page6Promise;
    await page6.getByRole('link', { name: '2', exact: true }).click();
    await page.getByRole('button', { name: 'Calculate' }).click();
    await expect(page.getByText('$ 9.00')).toBeVisible();
    await expect(page.getByText('(1 Days, 0 Hours, 0 Minutes)')).toBeVisible();
});