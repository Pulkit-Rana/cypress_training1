// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

import { Login } from "./pageobjects/login"

const loginPage = new Login()

Cypress.Commands.add('login', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    loginPage.getLoginScreen().should("be.visible")
    loginPage.getBannerImage().should("be.visible").and("exist")
    loginPage.getUserName().type("Admin", { force: true })
    loginPage.getPassword().type("admin123", { force: true })
    loginPage.getLoginButton().contains("Login").click({ force: true })
})

Cypress.Commands.add('logout', () => {
    cy.get(".oxd-userdropdown-tab").click({ force: true })
    cy.get(".oxd-dropdown-menu").should('be.visible')
    cy.get('[role="menuitem"]').contains("Logout").click({ force: true })
})
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })