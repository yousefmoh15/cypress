/// <reference types="cypress" />

it('google test', ()=> {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click().find("admin").click()

})