import { CommonPage } from "../support/helper/commonPage"


const commonPage = new CommonPage()

describe("To verify the Admin Page", () => {
    beforeEach(() => {
        cy.fixture("/admin.json").as('admin')
        cy.login()
    })

    it("Verify that the user is able to navigate to Admin tab and validate the screen", () => {
        commonPage.navigateToTabs("Admin")
    })

    it("Verify that the user is able to navigate to Admin tab and validate the screen", () => {
        commonPage.navigateToTabs("Admin")
    })

    it("Verify that the user is able to navigate to Admin tab and validate the screen", () => {
        commonPage.navigateToTabs("Admin")
    })

    it("Verify that the user is able to navigate to Admin tab and validate the screen", () => {
        navigate()
    })
})


function navigate(){
    loginPage.getDashboardTab().contains(tabName).click({ force: true })
    loginPage.getDashboardTab().contains(tabName).parent().should("have.class", "active")
}