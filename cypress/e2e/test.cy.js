/// <reference types = "cypress"/>
//In this test file I have automated login functionality using Cypress
it("should login to the website", () =>{
    cy.visit('/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
    cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
})
it('should not login to website', ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin1234')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert-content > .oxd-text').contains('Invalid credential').should('exist')

})