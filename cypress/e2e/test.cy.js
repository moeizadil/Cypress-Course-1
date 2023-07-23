/// <reference types = "cypress"/>
//In this test file I have automated login functionality using Cypress
it("should login to the website", () =>{
    cy.login('admin','admin123')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
    cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
})
it('should not login to website', ()=>{
    cy.login('admin','admin1234')
    cy.get('.oxd-alert-content > .oxd-text').contains('Invalid credential').should('exist')
})