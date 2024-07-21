export class Login {

    getLoginScreen() {
        return cy.get('.orangehrm-login-container').should("be.visible")
    }

    getBannerImage() {
        return cy.get('[alt="company-branding"]')
    }

    getUserName() {
        return cy.get('[placeholder="Username"]')
    }

    getPassword() {
        return cy.get('[placeholder="Password"]')
    }

    getLoginButton() {
        return cy.get('.oxd-button')
    }
}