/// <reference types="cypress" />

describe('check Box ', () => {
    it('checkbox ', () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get("#autocomplete-textfield").invoke('removeAttr','target').click({force:true})
        cy.get("#myInput").type("f")
        

        
    });


});