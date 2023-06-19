describe('Navigating to Checkboxes', () => {
    it('Validate checkboxes', () => {
    cy.intercept('/some-3rd-party-script.js*').as('externalScript');
      cy.visit('https://practice.cydeo.com/')   
      cy.get('.list-group > :nth-child(32) > a').click({force:true})
      //cy.realPress('Enter')
      cy.get('#result').click({force:true})
  
    })
  })