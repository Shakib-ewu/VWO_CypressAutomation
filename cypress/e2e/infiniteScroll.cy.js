describe('Navigate to infinite SCroll ', () => {
    it('Validating Scroll top to bottom', () => {
    cy.intercept('/some-3rd-party-script.js*').as('externalScript');
      cy.visit('https://practice.cydeo.com/')   
      cy.get('.list-group > :nth-child(27) > a').click({force:true})
      cy.wait(30000)
      cy.get('h3').scrollIntoView({ duration: 2000 }).should('be.visible')
     // cy.scrollIntoView('footer')

    
      
      
      
      
  
    })
  })