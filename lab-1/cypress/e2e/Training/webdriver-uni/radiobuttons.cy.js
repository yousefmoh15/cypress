/// <reference types="cypress" />

describe('check Box ', () => {
    it('checkbox ', () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr','target').click({force:true})
        // cy.url().should("contain", "contactus")
        cy.get('#radio-buttons').find('[type="radio"]').first().check()
        // cy.get(':nth-child(5) > input').uncheck()
        
    });


});