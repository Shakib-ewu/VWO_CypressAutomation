describe('Navigating to Multiple Windows', () => {
    it('Validate windows', () => {
    cy.intercept('/some-3rd-party-script.js*').as('externalScript');
      cy.visit('https://practice.cydeo.com/')   
      cy.get('.list-group > :nth-child(35) > a').click({force:true})
      //cy.realPress('Enter')
      cy.get('.example > a').click().should('exist')
     
  
    })
  })