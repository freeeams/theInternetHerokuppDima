import { test, } from '@playwright/test'
import { CheckboxesPage } from '../pages/checkboxesPage'
import { HomePage } from '../pages/homepageClass'

test('Checkboxes validation', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com')
    let homePage = new HomePage(page)
    await homePage.clickingOnCheckboxes()
    let checkboxesPage = new CheckboxesPage(page)
    await checkboxesPage.validateCheckbox1NotChecked()
    await checkboxesPage.clickCheckbox2ToBeChecked()
    await checkboxesPage.clickCheckbox1()
    await checkboxesPage.validateCheckbox1Checked()
}) 




