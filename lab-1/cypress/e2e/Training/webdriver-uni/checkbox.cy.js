/// <reference types="cypress" />

describe('check Box ', () => {
    it.skip('checkbox ', () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr','target').click({force:true})
        // cy.url().should("contain", "contactus")
        cy.get('#checkboxes > :nth-child(1) > input').check()
        cy.get(':nth-child(5) > input').uncheck()
        
    });
    it('Multible checkboxs ', () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr','target').click({force:true})
        // cy.url().should("contain", "contactus")
        cy.get('input[type="checkbox"]').check(["option-1","option-2"]).should("be.checked")  
        
    });

});