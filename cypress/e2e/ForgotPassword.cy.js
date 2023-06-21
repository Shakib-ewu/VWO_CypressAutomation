describe('Navigate to Forgot Password ', () => {
    it('Validating forget password', () => {
    cy.intercept('/some-3rd-party-script.js*').as('externalScript');
      cy.visit('https://practice.cydeo.com/')   
      cy.get('.list-group > :nth-child(21) > a').click({force:true})
      cy.get("input[name='email']").type("check265@gmail.com")
      cy.get('#form_submit').click().should('exist')
      cy.get('h4').should('have.text',"Your e-mail's been sent!")
      
      
      
      
  
    })
  })