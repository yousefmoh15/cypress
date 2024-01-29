/// <reference types="cypress" />

describe('Handling Iframe & modals ', () => {
    it('Handling Iframe & modals ', () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get("#iframe").invoke('removeAttr','target').click({force:true})
        // cy.url().should("contain", "contactus")
        cy.get("#frame").then($iframe =>{
         const body = $iframe.contents().find('body') 
         cy.wrap(body).as('iframe')  
        })

        cy.get('@iframe').find('#button-find-out-more').click()
        cy.get('@iframe').find(".modal-body").should("contain", "Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras...")
        // cy.get('@iframe').find(".btn-default").should("have.attr","data-dismiss",'modal').should('contain','Close').click()
        cy.get('@iframe').contains('Close').click()

    });

});