/// <reference types="cypress" />

describe('Contact us ', () => {
    it('Pass The form', () => {
        
        cy.visit("https://www.automationteststore.com/")
        cy.get('.info_links_footer > :nth-child(5) > a').click()
        cy.get('#ContactUsFrm_first_name').type("Joo")
        cy.get('#ContactUsFrm_email').type("aa@gmail.com")
        cy.get('#ContactUsFrm_enquiry').type("hello")
        cy.get('.col-md-6 > .btn').click()
        cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')
            });
it.only('passes', () => {
                cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
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
                cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
                // cy.get('#contact-us > .thumbnail > .section-title > h1').click()
                cy.get('[name="first_name"]').type("Joo")
                cy.get('[name="last_name"]').type("Joo")
                // cy.get('[name="email"]').type("")
                cy.get('textarea.feedback-input').type("ok")
                cy.get('[type="submit"]').click()
                cy.get('body').contains(" Error: all fields are required")
              });
    
});