describe('Navigating to Disappearing elements ', () => {
    it('Validate elements', () => {
    cy.intercept('/some-3rd-party-script.js*').as('externalScript');
      cy.visit('https://practice.cydeo.com/')   
      cy.get('.list-group > :nth-child(9) > a').click({force:true})
      cy.get(':nth-child(4) > :nth-child(1) > a').click()
      cy.go('back')
      //cy.get('.list-group > :nth-child(9) > a').click({force:true})
      cy.get(':nth-child(4) > :nth-child(2)').click()
      cy.get('h2').should('have.text','Sinatra doesn’t know this ditty.')
      cy.go('back')
      cy.get(':nth-child(4) > :nth-child(3)').click()
      cy.get('h2').should('have.text','Sinatra doesn’t know this ditty.')
      
      
  
    })
  })