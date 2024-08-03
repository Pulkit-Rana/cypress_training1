/// <reference types="Cypress"/>

describe("This is my First Test Set", () => {
  before("before function", () => {
    cy.log("THis is before, It only runs once that too in the starting")
  })

  beforeEach(() => {
    cy.log("This is Before Each, It runs before any IT files")
  })

  afterEach(() => {
    cy.log("This is after Each, it runs everytime a testcase is done executing")
  })

  after(() => {
    cy.log("This hook runs once all the testcases are done executing")
  })

  it("This is my first test case", () => {})

  it("This is my second test case", () => {})
})
