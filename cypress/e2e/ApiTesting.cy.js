//website = https://jsonplaceholder.typicode.com/guide/
/// <reference types = "cypress"/>

describe('REST API Testing Test Suites', ()=>{

    it('should get the data',()=>{
        cy.request('https://jsonplaceholder.typicode.com/posts/1').as('getRequest')
        cy.get('@getRequest').then(response=>{
            cy.log(response)
        })

    })

    it('should get all the data',()=>{
        cy.request('https://jsonplaceholder.typicode.com/posts').as('getAllRequest')
        cy.get('@getAllRequest').then(response=>{
            cy.log(response)
        })

    })

    //POST
    it('should create the data',()=>{
        cy.request('POST','https://jsonplaceholder.typicode.com/posts', 
        {
            id: 1,
            title: 'Cypress API Testing',
            body: 'Body ',
            userId: 1
          }
        ).as('postRequest')
        cy.get('@postRequest').then(response=>{
            expect(response.status).to.eq(201)
            expect(response.body.title).to.eq('Cypress API Testing')
            expect(response.statusText).to.eq('Created')
            // if(response.status == 201){
            //     cy.log(response) 
            // }
        })

    })
    //PUT
    it('should update the data',()=>{
        cy.request('PUT','https://jsonplaceholder.typicode.com/posts/1',
        {
            id: 1,
            title: 'Cypre ss API Testing Updated',
            body: 'Updated ',
            userId: 1
          }
        ).as('updateResource')
       cy.get('@updateResource').then(response=>{
        expect(response.status).to.eq(200)
        expect(response.statusText).to.eq('OK')
        expect(response.body.body).to.eq('Updated ')


        cy.log(response)
       })

    })
    //PATCH
    it('should update/PATCH the data',()=>{
        cy.request('PATCH','https://jsonplaceholder.typicode.com/posts/1',
        {
            title: 'Cypress ss API Testing Updated',
          }
        ).as('updateResource')
       cy.get('@updateResource').then(response=>{
        expect(response.status).to.eq(200)
        expect(response.statusText).to.eq('OK')
        expect(response.body.title).to.eq('Cypress ss API Testing Updated')
        cy.log(response)
       })

    })
    //DELETE
    it.only('should Delete the data',()=>{
        cy.request('DELETE','https://jsonplaceholder.typicode.com/posts/1'
       
        ).as('deleteResource')
       cy.get('@deleteResource').then(response=>{
        expect(response.status).to.eq(200)
        expect(response.statusText).to.eq('OK')
        //expect(response.body.title).to.eq('Cypress ss API Testing Updated')
        cy.log(response)
       })
       //Put is used to update all data while PATCH is used to update only specific data

    })

})