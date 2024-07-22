export class CommonPage {

    loginFunctionality1() {
        loginPage.getLoginScreen().should("be.visible")
        loginPage.getBannerImage().should("be.visible").and("exist")
        loginPage.getUserName().type("Admin", { force: true })
        loginPage.getPassword().type("admin123", { force: true })
        loginPage.getLoginButton().contains("Login").click({ force: true })
        cy.log("Second way to reduce duplicay")
    }

}