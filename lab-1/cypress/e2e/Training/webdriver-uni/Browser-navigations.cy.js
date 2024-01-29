/// <reference types="cypress" />

describe('Validate webfriver home link', () => {
    it('Browseractions ', () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get("#contact-us").invoke('removeAttr','target').click({force:true})
        cy.url().should("contain", "contactus")
        cy.go('back')
        cy.reload()
        cy.url().should("contain", "http://www.webdriveruniversity.com/")
        cy.get("#login-portal").invoke('removeAttr','target').click({force:true})
        cy.url().should("contain", "Login-Portal")
        cy.go('back')
        cy.get("#to-do-list").invoke('removeAttr','target').click({force:true})
        cy.url().should("contain", "To-Do-List")
        cy.go('back') 
    });
    // it.skip('Login ', () => {
    //     cy.visit("http://www.webdriveruniversity.com/")
    //     cy.get("#login-portal").invoke('removeAttr','target').click({force:true})
    //     cy.url().should("contain", "Login-Portal")
    //     cy.go('back')
    //     cy.reload()
    //     cy.url().should("contain", "http://www.webdriveruniversity.com/")
    // });
});