/// <reference types="cypress" />

describe('Contact us ', () => {
it('passes', () => {
                cy.visit('http://www.webdriveruniversity.com/')
                cy.get("#contact-us").invoke('removeAttr','target').click({force:true})
                cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
                // cy.get('#contact-us > .thumbnail > .section-title > h1').click()
                cy.get('[name="first_name"]').type("Joo")
                cy.get('[name="last_name"]').type("Joo")
                cy.get('[name="email"]').type("test@gmail.com")
                cy.get('textarea.feedback-input').type("ok")
                cy.get('[type="submit"]').click()
                cy.get('h1').contains("Thank You for your Message!")              
              });
              
it('Failed', () => {
                cy.visit('http://www.webdriveruniversity.com/')
                cy.get("#contact-us").invoke('removeAttr','target').click({force:true})
                // cy.get('#contact-us > .thumbnail > .section-title > h1').click()
                cy.get('[name="first_name"]').type("Joo")
                cy.get('[name="last_name"]').type("Joo")
                // cy.get('[name="email"]').type("")
                cy.get('textarea.feedback-input').type("ok")
                cy.get('[type="submit"]').click()
                cy.get('body').contains(" Error: all fields are required")
              });
    
});