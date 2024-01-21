/// <reference types="cypress" />

describe('Iterate over Elemet', () => {

    it('LOg infos about all the product', () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get('.thumbnail').as('ProductThumbnail')
        cy.get('@ProductThumbnail').should("have.length", 16)
        cy.get('@ProductThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
        });
    it.only('Calculate Total Prices', () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get('.oneprice').each(($el, index, $list) => {
            // $el is a wrapped jQuery element
             cy.log("Price :" + $el.text())
             
            });
            cy.get('.oneprice').invoke('text').as('oneprice')
            cy.get('.pricenew').invoke('text').as('saleprice')

            var TotalItems = 0
            cy.get('@oneprice').then($linktxt => {
                var nosaletotal = 0;
                var price = $linktxt.split('$')
                var i;
                for (i =0; i< price.length; i++){
                    cy.log(price[i])     
                    nosaletotal += Number(price[i])
                
                };
                cy.log("Total is : " + nosaletotal)
                TotalItems += nosaletotal
                cy.log("Total is : " + TotalItems)
             });

            cy.get('@saleprice').then($linktxt => {
                var saletotal = 0;
                var price = $linktxt.split('$')
                var i;
                for (i =0; i< price.length; i++){
                    cy.log(price[i])     
                    saletotal += Number(price[i])
                    
                
                };
                cy.log("Total is : " + saletotal)
                TotalItems += Number(saletotal)
                cy.log("Total is : " + TotalItems)
                
             })
             .then(() => {
                cy.log("Total is : " + TotalItems)
             })
             
    });
});