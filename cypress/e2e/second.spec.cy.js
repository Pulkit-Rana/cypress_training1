/// <reference types="Cypress"/>

describe("This is my Second Test Set",()=>{

    beforeEach(()=>{
cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })

    it("Verify Login",()=>{
        cy.get('.oxd-input--active').assertions
        cy.get('').actions
    })
})