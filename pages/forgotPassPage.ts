
import { Locator, Page } from "@playwright/test"


export class ForgotPasswordPage {
    emailInputBar: Locator;
    retrivePasswordButton: Locator;
    constructor(page: Page) {
        this.emailInputBar = page.getByRole('textbox', { name: 'E-mail' })
        this.retrivePasswordButton = page.getByRole('button', { name: 'Retrieve password' })
    }
    async inputingEmail(): Promise<void> {
        await this.emailInputBar.fill('123')
        await this.retrivePasswordButton.click()
    }
  
}