import { Login } from "../pageobjects/login"

const loginPage = new Login()

export class CommonPage {
  
  
  navigateToTabs(tabName) {
    loginPage.getDashboardTab().contains(tabName).click({ force: true })
    loginPage.getDashboardTab().contains(tabName).parent().should("have.class", "active")
  }
}