import { Locator, Page, expect } from '@playwright/test'

export class ErrorMessagePage {
    errorMessage: Locator;
    constructor(page: Page){
        this.errorMessage = page.getByRole('heading', { name: 'Internal Server Error' })
    }
    
    async validateErrorMessage(message: string): Promise<void> {
        await expect(this.errorMessage).toHaveText(message)
    }
}

