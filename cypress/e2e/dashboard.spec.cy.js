import { Dashboard } from "../support/pageobjects/dashboard"

const dash = new Dashboard()

describe("Testing Dashboard functionality", () => {

    beforeEach(() => {
        cy.login()
    })

    it("Verify the Dashboard Page", () => {
        dash.getDashboardHeader().should("have.text", "Dashboard")
        cy.get(".oxd-layout-context").should("be.visible")
        cy.get(".oxd-sheet--rounded").should('have.lengthOf', 7)
    })

    it("Checking the headings of tyhe tiles",()=>{
        cy.get("header locator").should("have.text","d1")
     
    })

})