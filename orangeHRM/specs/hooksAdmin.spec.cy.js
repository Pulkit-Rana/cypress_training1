import { CommonPage } from "../support/helper/commonPage"

const commonPage = new CommonPage()

describe("To verify the Admin Page", () => {
  beforeEach(() => {
    cy.fixture("/admin.json").as("admin")
    cy.login()
    commonPage.navigateToTabs("Admin")
  })

  it("Verify that the user is able to navigate to Admin tab and validate the screen", () => {
    cy.log("1")
  })
  it("Verify that the user is able to navigate to Admin tab and validate the screen", () => {
    cy.log("2")
  })
  it("Verify that the user is able to navigate to Admin tab and validate the screen", () => {
    cy.log("3")
  })
  it("Verify that the user is able to navigate to Admin tab and validate the screen", () => {
    cy.log("4")
  })
  it("Verify that the user is able to navigate to Admin tab and validate the screen", () => {
    cy.log("5")
  })
})
