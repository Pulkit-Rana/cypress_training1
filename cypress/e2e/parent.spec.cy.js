import { Login } from "../support/pageobjects/login"


const loginPage = new Login()

describe("Testing Login Functionality", () => {

    beforeEach(() => {
      cy.login()
      cy.visit("/admin")
    })

    it("Understanding parent", () => {
        loginPage.getLoginScreen().should("be.visible")
        loginPage.getBannerImage().should("be.visible").and("exist")
        loginPage.getUserName().type("Admin", { log: false })
        loginPage.getPassword().type("admin123", { log: false })
        loginPage.getLoginButton().contains("Login").click({ force: true })
        loginPage.getDashboardTab().contains("Dashboard").parent().should('have.class', 'active')
    })

    it("Understanding parents and parentUntil", () => {
        loginPage.getLoginScreen().should("be.visible")
        loginPage.getBannerImage().should("be.visible").and("exist")
        loginPage.getUserName().type("Admin", { log: false })
        loginPage.getPassword().type("admin123", { log: false })
        loginPage.getLoginButton().contains("Login").click({ force: true })
        loginPage.getDashboardTab().contains("Dashboard").parents(".oxd-main-menu-item").should('have.class', 'active')
    })

    it("Understanding parentUntil", () => {
        loginPage.getLoginScreen().should("be.visible")
        loginPage.getBannerImage().should("be.visible").and("exist")
        loginPage.getUserName().type("Admin", { log: false })
        loginPage.getPassword().type("admin123", { log: false })
        loginPage.getLoginButton().contains("Login").click({ force: true })
        loginPage.getDashboardTab().contains("Dashboard").parentsUntil(".oxd-main-menu-item-wrapper").should('have.class', 'active')
    })
})