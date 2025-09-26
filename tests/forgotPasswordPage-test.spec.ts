

import { test, expect } from '@playwright/test'
import { ForgotPasswordPage } from '../pages/forgotPassPage'
import { HomePage } from '../pages/homepageClass'
import { ErrorMessagePage } from '../pages/errorMessagePage'

test('Error message validation', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com')
  let homePage = new HomePage(page)
  await homePage.clickingOnForgotPassword()
  let forgotPasswordPage = new ForgotPasswordPage(page)
  await forgotPasswordPage.inputingEmail()
  let errorMessagePage = new ErrorMessagePage(page)
  await errorMessagePage.validateErrorMessage('Internal Server Error')
})


