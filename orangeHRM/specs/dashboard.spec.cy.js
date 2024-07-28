import { Dashboard } from "../support/pageobjects/dashboard"

const dash = new Dashboard()

describe("Testing Dashboard functionality", () => {

    beforeEach(() => {
        cy.login()
        cy.fixture("/dashboard.json").as('dashboard')
    })

    it("Verify the Dashboard Page", () => {
        dash.getDashboardHeader().should("have.text", "Dashboard")
        cy.get(".oxd-layout-context").should("be.visible")
        cy.get(".oxd-sheet--rounded").should('have.lengthOf', 7)
    })

    it("Checking the headings of tyhe tiles", () => {
        cy.get("@dashboard").then((dashboard) => {
            dash.getTilesHeading()
                .find(".oxd-text.oxd-text--p")
                .then((ele) => {
                    expect(ele.text())
                        .include(dashboard.h1)
                        .and.include(dashboard.h2)
                        .and.include(dashboard.h3)
                        .and.include(dashboard.h4)
                        .and.include(dashboard.h5)
                        .and.include(dashboard.h6)
                        .and.include(dashboard.h7)
                })
        })

    })
})