import { Dashboard } from "../../support/pageobjects/dashboard"

const dash = new Dashboard()

//
describe("Testing Dashboard functionality", () => {
  beforeEach(() => {
    cy.login()
  })

  it("Verify the Dashboard Page", () => {
    dash.getDashboardHeader().should("have.text", "Dashboard")
    cy.get(".oxd-layout-context").should("be.visible")
    cy.get(".oxd-sheet--rounded").should("have.lengthOf", 7)
  })

  it.skip("Checking the headings of tyhe tiles", () => {
    dash
      .getTilesHeading()
      .find(".oxd-text.oxd-text--p")
      .then(ele => {
        expect(ele.text())
          .include("Time at Work")
          .and.include("My Actions")
          .and.include("Quick Launch")
          .and.include("Buzz Latest Posts")
          .and.include("Employees on Leave Today")
          .and.include("Employee Distribution by Sub Unit")
          .and.include("Employee Distribution by Location")
      })
  })
  it("Verify the Dashboard Page", () => {
    dash.getDashboardHeader().should("have.text", "Dashboard")
    cy.get(".oxd-layout-context").should("be.visible")
    cy.get(".oxd-sheet--rounded").should("have.lengthOf", 7)
  })
  it.only("Verify the Dashboard Page", () => {
    dash.getDashboardHeader().should("have.text", "Dashboard")
    cy.get(".oxd-layout-context").should("be.visible")
    cy.get(".oxd-sheet--rounded").should("have.lengthOf", 7)
  })
  it("Verify the Dashboard Page", () => {
    dash.getDashboardHeader().should("have.text", "Dashboard")
    cy.get(".oxd-layout-context").should("be.visible")
    cy.get(".oxd-sheet--rounded").should("have.lengthOf", 7)
  })
})
