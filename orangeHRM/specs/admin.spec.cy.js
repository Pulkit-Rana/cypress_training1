import { CommonPage } from "../support/helper/commonPage"
import { Dashboard } from "../support/pageobjects/dashboard"


const commonPage = new CommonPage()
const titleCheck = new Dashboard()

describe("To verify the Admin Page", () => {
    beforeEach(() => {
        cy.fixture("/admin.json").as('admin')
        cy.login()
        commonPage.navigateToTabs("Admin")
    })

    it("Verify the Admin Page", () => {
        titleCheck.getDashboardHeader().should("have.text", "AdminUser Management")
        cy.get(".oxd-table-filter").should("be.visible")
        cy.get(".oxd-button--secondary").contains("Add").should("be.visible")
        cy.get(".oxd-button-icon").should("be.visible")
        cy.get(".orangehrm-container").should("be.visible")
    })
    it.skip("Validate the Navigation Headers", () => {
        cy.get(".oxd-topbar-body-nav")
    })


    it.only("Validate the search functionality", () => {
        cy.get(".oxd-input-field-bottom-space .oxd-input.oxd-input--active").type("FMLName", { force: true })
        cy.get(".oxd-select-text.oxd-select-text--active").eq(0).click({ force: true })
        cy.get('[role="listbox"]').should("be.visible").find(`[role="option"]`).contains("ESS").click({ force: true })
        cy.get(`[placeholder="Type for hints..."]`).click({ force: true }).type("Qwerty")
        cy.get(".oxd-select-text.oxd-select-text--active").eq(1).click({ force: true })
        cy.get('[role="listbox"]').should("be.visible").find(`[role="option"]`).contains("Enabled").click({ force: true })
    })
    it("Verify that the user is able to navigate to Admin tab and validate the screen", () => {

    })
    it("Verify that the user is able to navigate to Admin tab and validate the screen", () => {

    })

})
