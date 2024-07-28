export class Dashboard {

    getDashboardHeader() {
        return cy.get(".oxd-text--h6")
    }

    getTilesHeading() {
        return cy.get(".orangehrm-dashboard-widget-header")
    }
}