describe('Navigate to Geo location ', () => {
    it('Validating to Google Map', () => {
    cy.intercept('/some-3rd-party-script.js*').as('externalScript');
      cy.visit('https://practice.cydeo.com/')   
      cy.get('.list-group > :nth-child(24) > a').click({force:true})
      cy.get('button').click().should('exist')
    
     // cy.wait(10000);
      //cy.get('#map-link > a').click({force:true})
      
      
      
      
      
  
    })
  })