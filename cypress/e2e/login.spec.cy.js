import { Login } from "../support/pageobjects/login"

const loginPage = new Login()

describe("Testing Login Functionality", () => {

    beforeEach(() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.fixture('login.json').then((login) => {
            this.login = login
        }) 
    })

    it("Testing the Login Page", () => {
        loginPage.getLoginScreen()
        loginPage.getBannerImage().should("be.visible").and("exist")
        loginPage.getUserName().type(this.login.userName, { force: true })
        loginPage.getPassword().type(this.login.password, { force: true })
        loginPage.getLoginButton().contains("Login").click({ force: true })
    })


})
