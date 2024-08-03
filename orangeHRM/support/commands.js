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

// first intialize the encryptor but using below command
const encryptor = require("simple-encryptor")(Cypress.env("info")) // key must be secure and should be saved in env to prevent data loss

Cypress.Commands.add("login", () => {
  cy.visit("/")
  loginPage.getLoginScreen().should("be.visible")
  loginPage.getBannerImage().should("be.visible").and("exist")
  loginPage.getUserName().type(Cypress.env("userName"), { log: false })
  loginPage.getPassword().type(encryptor.decrypt(Cypress.env("password")), { log: false })
  loginPage.getLoginButton().contains("Login").click({ force: true })
  loginPage.getDashboardTab().contains("Dashboard").parent().should("have.class", "active")
})

Cypress.Commands.add("logout", () => {
  cy.get(".oxd-userdropdown-tab").click({ force: true })
  cy.get(".oxd-dropdown-menu").should("be.visible")
  cy.get('[role="menuitem"]').contains("Logout").click({ force: true })
})

// to decrypt
// encryptor.decrypt("value/text")
