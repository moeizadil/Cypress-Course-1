export class demoSitePages {

    laptopPage(){
        cy.get('[class="list-group"]')
        .find('a')
        .contains('Laptops')
        .click()
    }
    MonitorPage(){
        cy.get('[class="list-group"]')
        .find('a')
        .contains('Monitors')
        .click()
    }
    PhonePage(){
        cy.get('[class="list-group"]')
        .find('a')
        .contains('Phone')
        .click()
    }


}
export const navigateTo = new demoSitePages()