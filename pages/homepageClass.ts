

import { Page, Locator } from "@playwright/test";

export class HomePage {
    forgotPasswordLink: Locator;
    checkboxesLink: Locator;
    constructor(page: Page) {
        this.forgotPasswordLink = page.getByRole('link', { name: 'Forgot Password' })
        this.checkboxesLink = page.getByRole('link', { name: 'Checkboxes' })
    }
    async clickingOnForgotPassword(): Promise<void> {
        await this.forgotPasswordLink.click()
    }
    async clickingOnCheckboxes(): Promise<void> {
        await this.checkboxesLink.click()
    } 
}



