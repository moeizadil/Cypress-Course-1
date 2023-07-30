/// <reference types = "cypress"/>

describe('Web Elements',()=>{
    before(()=>{
        //cy.visit('https://opensource-demo.orangehrmlive.com')
    })

it('interaction with elements', ()=>{
    // # is used to locate element by id
    // . is used to locate ELEMENT by class 
    cy.visit('https://demoqa.com/automation-practice-form')
    cy.get('#firstName')
    .type('Moeiz')
})

it('Chaining Elements', ()=>{
    // next method will find the next tag
    // parent method will find parent tag
    // children method

    cy.visit('https://opensource-demo.orangehrmlive.com')
    cy.get('.oxd-form')
        .find('div')
        .find('div')
        .find('div') //to find particular tag inside tag
        .eq(1)  //it is used to locate the index of tag
        .type('Admin')
    
})

it('Yield subject from commands', ()=>{
    cy.get('[class="oxd-label"]').then(label=>{
        expect(label.text()).to.eq('UsernamePassword')
    })
    
})

it('Wrap Elements', ()=>{
    cy.get('[class="oxd-text oxd-text--p"]')
    .then(label=>{
        cy.wrap(label).should('contain','Username')
    })
    
})

it('Invoke', ()=>{
    cy.get('[class="oxd-text oxd-text--p"]').invoke('text').then(labelText=>{
        expect(labelText).to.contain('Username')
    })
    cy.get('[class="oxd-text oxd-text--p"]').invoke('attr','class').then(attrClass=>{
        expect(attrClass).to.eq('oxd-text oxd-text--p')
    })
     
    
})

it('Chai Jquery Asssertion', ()=>{
    cy.get('[class="oxd-text oxd-text--p"]').then($label=>{
        expect($label.text()).to.contain('Username')
    })
})
//This test wont work as elements are not in this website, only for understanding
it('Each Method', ()=>{
    cy.get('.oxd-form').each(checkBoxDiv=>{
        cy.wrap(checkBoxDiv).find('[type]="checkbox"').check()
    })   
})

it.only('Cypress Waits', ()=>{
    cy.visit('https://demoblaze.com/')
    // cy.wait(5000)
    //cy.get('#cypress',{timeout:7000})         //timeout is set to 7 second 
    cy.intercept('GET','/entries').as('waitForEntries')
    cy.intercept('POST','/bycat').as('waitForBycat')

    cy.wait('@waitForEntries')
    cy.get('[class="list-group"]')
        .find('a')
        .contains('Laptops')
        .click()
    cy.wait('@waitForBycat')

    })  
 


})