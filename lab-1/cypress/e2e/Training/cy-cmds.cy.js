describe('template spec', () => {
    it('passes', () => {
      cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
      // cy.get('#contact-us > .thumbnail > .section-title > h1').click()
      cy.get('[name="first_name"]').type("Joo")
      cy.get('[name="last_name"]').type("Joo")
      cy.get('[name="email"]').type("test@gmail.com")
      cy.get('textarea.feedback-input').type("ok")
      cy.get('[type="submit"]').click()
    
    })
    it.only('Failed', () => {
      cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
      // cy.get('#contact-us > .thumbnail > .section-title > h1').click()
      cy.get('[name="first_name"]').type("Joo")
      cy.get('[name="last_name"]').type("Joo")
      // cy.get('[name="email"]').type("")
      cy.get('textarea.feedback-input').type("ok")
      cy.get('[type="submit"]').click()
    });
  }) 