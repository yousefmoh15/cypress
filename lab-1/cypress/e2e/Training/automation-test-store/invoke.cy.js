/// <reference types="cypress" />

describe('Iterate over Elemet', () => {

    it('LOg infos about all the product', () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
      // cy.get("a[href*='product/category&path=']").contains("Skincare")
      cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        // $el is a wrapped jQuery element
         cy.log("Index" + index + ":" + $el.text())
        })
         cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            if ($el.text().includes('Pantene Pro-V Conditioner, Classic Care')) {
                cy.wrap($el).click()
                
            }
         })
     
    });
});