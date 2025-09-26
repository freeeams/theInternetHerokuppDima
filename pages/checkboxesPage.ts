import { Locator, Page, expect } from "@playwright/test"


export class CheckboxesPage {
    checkbox1: Locator;
    checkbox2: Locator;
    constructor(page: Page) {
        this.checkbox1 = page.getByRole('checkbox').first()
        this.checkbox2 = page.getByRole('checkbox').nth(1)
    }
    async clickCheckbox1(): Promise<void> {
        await this.checkbox1.click();
    }
    async validateCheckbox1NotChecked(): Promise<void> {
        await expect(this.checkbox1).not.toBeChecked();
    }
    async validateCheckbox1Checked(): Promise<void> {
        await expect(this.checkbox1).toBeChecked();
    }
    async clickCheckbox2ToBeChecked(): Promise<void> {
        await expect(this.checkbox2).toBeChecked()
    }
}
