/// <reference types="cypress" />

describe('Contact us ', () => {
    it('Pass The form', () => {
        
        cy.visit("https://www.automationteststore.com/")
        cy.get('.info_links_footer > :nth-child(5) > a').click().then(function(linkText){
            cy.log("Clicked on link using text:"+ linkText.text())
         })
       // cy.get("a[href$='contact']").click().then(function(linkText){
         //   cy.log("Clicked on link using text: " + linkText.text())
        //})
        cy.get('#ContactUsFrm_first_name').type("Joo")
        cy.get('#ContactUsFrm_email').type("aa@gmail.com")
        cy.get('#ContactUsFrm_enquiry').type("hello")
        cy.get('.col-md-6 > .btn').click()
        cy.get('.mb40 > :nth-child(3)').should("have.text", "Your enquiry has been successfully sent to the store owner!")


    });
    
});