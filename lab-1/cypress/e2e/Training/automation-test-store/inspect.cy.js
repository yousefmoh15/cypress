/// <reference types="cypress" />

describe('Inspect Automation Test Store ', () => {
    it('Click on the first iten using item text', () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get(".prdocutname").contains("Skinsheen Bronzer Stick").click()
        cy.get('#product_quantity').clear().type(2)
        cy.get('.cart').click()
    });
    it("Click on the first item using index", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
    });
    
});