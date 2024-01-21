/// <reference types="cypress" />

it('google test', ()=> {
    cy.visit('https://www.google.com')
    cy.get('#APjFqb').type("Cyber security {enter}")
    cy.get('#rso > :nth-child(1) > .MjjYud > .g > .N54PNb > .jGGQ5e > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb > span').click()

})
