describe('Navigate to input Functionalities ', () => {
    it('Validating input options', () => {
    cy.intercept('/some-3rd-party-script.js*').as('externalScript');
      cy.visit('/')   
      cy.get('.list-group > :nth-child(28) > a').click({force:true})

      const randomNumber = Math.floor(Math.random() * 1000);
      cy.get('input').type( randomNumber ).should('be.visible')
      
      
      
      
      
  
    })
  })