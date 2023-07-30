/// <reference types = "cypress"/>
//In this test file I have automated login functionality using Cypress

beforeEach(()=>{
    cy.visit('/web/index.php/auth/login')
})
//it.only will run only particular test case. Only is the test function inside Mocha
//it.skip will skip the test case
it("should login to the website", () =>{
    cy.fixture('example').then(function(data){
        const credentials = data
        cy.login(credentials.username,credentials.password)
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    })

   
})
it('should not login to website', ()=>{
    cy.login('admin','admin1234')
    cy.get('.oxd-alert-content > .oxd-text').contains('Invalid credential').should('exist')
})