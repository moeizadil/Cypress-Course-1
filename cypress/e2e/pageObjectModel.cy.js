/// <reference types = "cypress"/>

const { navigateTo } = require("../support/demoSitePages")


describe('Page Object Model test', ()=>{
    it('test with pagee object',()=>{
        cy.visit('https://demoblaze.com/')
        cy.intercept('GET','/entries').as('waitForEntries')
        cy.intercept('POST','/bycat').as('waitForBycat')
        cy.wait('@waitForEntries')
        navigateTo.laptopPage( )
        cy.wait('@waitForBycat')
        navigateTo.MonitorPage()
        cy.wait('@waitForBycat')
        navigateTo.PhonePage()

    })
})