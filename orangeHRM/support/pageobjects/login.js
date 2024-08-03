export class Login {
  getLoginScreen() {
    return cy.get(".orangehrm-login-container")
  }

  getBannerImage() {
    return cy.get('[alt="company-branding"]')
  }

  getUserName() {
    return cy.get('[placeholder="Username"]', { log: false })
  }

  getPassword() {
    return cy.get('[placeholder="Password"]', { log: false })
  }

  getLoginButton() {
    return cy.get(".oxd-button")
  }

  getDashboardTab() {
    return cy.get(".oxd-text.oxd-text--span.oxd-main-menu-item--name ")
  }
}
