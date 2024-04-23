import { expect, type Locator, type Page } from '@playwright/test';

export class ParkingCostCalculator {
    readonly page: Page;
    readonly getParkingCostCaclculatorText: Locator;
    readonly calculateButton: Locator;
    readonly clickEntryDateButtonPopUp: Locator;
    readonly clickLeaveDateButtonPopup: Locator;
    readonly parkingLotSelector: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getParkingCostCaclculatorText = page.locator('p', { hasText: 'PARKING COST CALCULATOR' });
        this.calculateButton = page.locator('text= Calculate');
        this.clickEntryDateButtonPopUp = page.getByRole('row', { name: 'Please input entry date and' });
        this.clickLeaveDateButtonPopup = page.getByRole('row', { name: 'Please input leaving date and' });
        this.parkingLotSelector = page.locator('#ParkingLot');
    }

    async goto() {
        await this.page.goto('https://www.shino.de/parkcalc/');
    }

    async getParkingCostCaclculatorVisible() {
        await expect(this.getParkingCostCaclculatorText).toBeVisible();
    }

    async calculateClick() {
        await this.calculateButton.click();
    }

    async clickEntryDatePopup() {
        await this.clickEntryDateButtonPopUp.getByRole('link').click();
    }

    async clickLeaveDatePopup() {
        await this.clickLeaveDateButtonPopup.getByRole('link').click();
    }

    async setParkingLotSelectorOption(parkLotSelector: string) {
        await this.parkingLotSelector.selectOption(parkLotSelector);
    }
}