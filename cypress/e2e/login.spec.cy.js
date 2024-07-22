import { Login } from "../support/pageobjects/login"

const loginPage = new Login()

describe("Testing Login Functionality", () => {

    beforeEach(() => {
        cy.login()
        cy.log("First way to reduce duplicacy")
    })

    afterEach(()=>{
        cy.logout()
    })

    it("Testing the Login Page", () => {
        cy.logout()
        loginFunctionality()
        cy.log("first")
    })
    it("Testing the Login Page", () => {
        loginFunctionality()
        cy.log("Second")
    })
    it("Testing the Login Page", () => {
        loginFunctionality()
        loginFunctionality1()
        cy.log("Third")
    })
})

function loginFunctionality(){
    loginPage.getLoginScreen().should("be.visible")
    loginPage.getBannerImage().should("be.visible").and("exist")
    loginPage.getUserName().type("Admin", { force: true })
    loginPage.getPassword().type("admin123", { force: true })
    loginPage.getLoginButton().contains("Login").click({ force: true })
    cy.log("Second way to reduce duplicay")
}
