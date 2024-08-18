import { CommonPage } from "../support/helper/commonPage"
import { Dashboard } from "../support/pageobjects/dashboard"
import { faker } from "@faker-js/faker"

const commonPage = new CommonPage()
const titleCheck = new Dashboard()
const randomName = faker.person.fullName()

const text = Math.random(10 * 1)
const encryptor = require("simple-encryptor")(Cypress.env("info"))

describe("To verify the Admin Page", () => {
  beforeEach(() => {
    cy.intercept("GET", "/web/index.php/api/**/admin/users?**").as("adminlist")
    cy.fixture("/admin.json").as("admin")
    cy.login()
    commonPage.navigateToTabs("Admin")
  })

  it("Pre-req: Tying to fetch the empName and write it into the fixture file", () => {
    cy.get("div.oxd-table-body > div:nth-child(n) > div > div:nth-child(2) > div")
      .contains("Admin")
      .parentsUntil(".oxd-table-card")
      .find("div:nth-child(4) > div")
      .invoke("text")
      .as("empName")
      .then($empName => {
        let empName = $empName.split(" ")[0]
        cy.readFile("orangeHRM/fixtures/admin.json", err => {
          if (err) {
            return cy.log(err)
          }
        }).then(text => {
          text.empName = empName
          cy.writeFile("orangeHRM/fixtures/admin.json", JSON.stringify(text))
        })
      })
  })

  it("Verify the Admin Page", () => {
    cy.get("@admin").then(admin => {
      let text1 = Math.random(10 * 100)
      cy.log(text1)
      titleCheck.getDashboardHeader().should("have.text", admin.header)
      cy.get(".oxd-table-filter").should("be.visible")
      cy.get(".oxd-button--secondary").contains("Add").should("be.visible")
      cy.get(".oxd-button-icon").should("be.visible")
      cy.get(".orangehrm-container").should("be.visible")
      cy.reload()
    })
  })

  it("Validate the Navigation Headers", () => {
    cy.get('[role="columnheader"]').then($data => {
      expect($data.text())
        .include("Username")
        .and.include("User Role")
        .and.include("Employee Name")
        .and.include("Status")
        .and.include("Actions")
    })
  })

  it("Validate the search functionality", () => {
    cy.get("@admin").then(admin => {
      cy.intercept("GET", "/web/index.php/api/**/pim/employees?**").as("emplist")
      let text1 = Math.random(10 * 10)
      cy.log(text)
      cy.log(text1)
      cy.get(".oxd-input-field-bottom-space .oxd-input.oxd-input--active").type("Admin", {
        force: true,
      })
      cy.wait("@adminlist")
      cy.get(".oxd-select-text.oxd-select-text--active").eq(0).click({ force: true })
      cy.get('[role="listbox"]').as("listbox")
      cy.get("@listbox")
        .should("be.visible")
        .find(`[role="option"]`)
        .contains("Admin")
        .click({ force: true })
      cy.get(`[placeholder="Type for hints..."]`, { timeout: 10000 })
        .click({ force: true })
        .type(admin.empName, { delay: 200 })
      cy.wait("@emplist")
      cy.get("@listbox").should("be.visible").find(`[role="option"]`).first().click({ force: true })
      cy.get(".oxd-select-text.oxd-select-text--active").eq(1).click({ force: true })
      cy.get("@listbox")
        .should("be.visible")
        .find(`[role="option"]`)
        .contains("Enabled")
        .click({ force: true })
      cy.get(".oxd-form-actions > .oxd-button--secondary").contains("Search").click({ force: true })
      cy.wait("@adminlist")
      cy.get('.oxd-table-card [role="row"]').should("have.length", 1)
    })
  })

  it("Verify the Add functionality", () => {
    cy.get("@admin").then(admin => {
      let decryptPass = encryptor.decrypt(admin.pass)
      cy.intercept("GET", "/web/index.php/api/**/pim/employees?**").as("emplist")
      cy.get(".orangehrm-header-container > .oxd-button").contains("Add").click({ force: true })
      cy.wait("@adminlist")
      cy.get(".orangehrm-card-container > .oxd-text--h6").should("have.text", "Add User")
      cy.get(".oxd-select-text.oxd-select-text--active").eq(0).click({ force: true })
      cy.get('[role="listbox"]').as("listbox")
      cy.get("@listbox")
        .should("be.visible")
        .find(`[role="option"]`)
        .contains("Admin")
        .click({ force: true })
      cy.get(".oxd-select-text.oxd-select-text--active").eq(1).click({ force: true })
      cy.get('[role="listbox"]').as("listbox")
      cy.get("@listbox")
        .should("be.visible")
        .find(`[role="option"]`)
        .contains("Enabled")
        .click({ force: true })
      cy.get(`[placeholder="Type for hints..."]`, { timeout: 10000 })
        .click({ force: true })
        .type(admin.empName, { delay: 200 })
      cy.wait("@emplist")
      cy.get("@listbox").should("be.visible").find(`[role="option"]`).first().click({ force: true })
      cy.get(".oxd-input-field-bottom-space .oxd-input.oxd-input--active")
        .eq(0)
        .type(randomName, { force: true })
      cy.get(`[type="password"]`).first().type(decryptPass)
      cy.get(`[type="password"]`).last().type(decryptPass)
      cy.get(".oxd-button--secondary").contains("Save").click({ force: true })
      cy.get("#oxd-toaster_1").should("be.visible")
    })
  })

  it("Verify that the user is able to navigate to Admin tab and validate the screen", () => {
    cy.get("div.oxd-table-body > div:nth-child(n) > div > div:nth-child(2) > div")
      .contains(randomName)
      .parentsUntil(".oxd-table-card")
      .find(".oxd-table-cell-actions .oxd-icon.bi-pencil-fill")
      .click({ force: true })
  })

  it("delete functionality", () => {
    cy.get("div.oxd-table-body > div:nth-child(n) > div > div:nth-child(2) > div")
      .contains(randomName)
      .parentsUntil(".oxd-table-card")
      .find(".oxd-table-cell-actions .oxd-icon.bi-trash")
      .click({ force: true })
    cy.get(".orangehrm-dialog-popup").should("be.visible")
    cy.get(".oxd-button.oxd-button--medium.oxd-button--label-danger.orangehrm-button-margin").click(
      { force: true }
    )
    cy.get("#oxd-toaster_1").should("be.visible")
  })

  it.only("delete by checkboxes", () => {
    cy.get('[type="checkbox"]').first().check({ force: true })
    // cy.get('.orangehrm-horizontal-padding > div > .oxd-button').click({ force: true })
    cy.get("div.oxd-table-body > div:nth-child(n) > div > div:nth-child(2) > div")
      .contains("FMLName")
      .parentsUntil(".oxd-table-card")
      .find("input[type=checkbox]")
      .uncheck({ force: true })
  })
})
