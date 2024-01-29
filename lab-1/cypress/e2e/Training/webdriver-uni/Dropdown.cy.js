/// <reference types="cypress" />

describe('check Box ', () => {
    it('checkbox ', () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr','target').click({force:true})
        cy.get('#dropdowm-menu-1').select("python").should('have.value','python')
        cy.get('#dropdowm-menu-2').select("testng")
        cy.get('#dropdowm-menu-3').select(2).should('have.value','javascript')
        cy.get('#dropdowm-menu-3').select(3).should('have.value','jquery')

        
    });


});