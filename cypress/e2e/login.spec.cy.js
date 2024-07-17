describe("Testing Login Functionality", () => {

    beforeEach(() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })

    it("Filling the fileds", () => {
        cy.get('[placeholder="Username"]').type('Admin', { force: true })
        cy.get('[placeholder="Password"]').type('admin123', { force: true })
        cy.get('.oxd-button').click({ force: true })
    })
})
