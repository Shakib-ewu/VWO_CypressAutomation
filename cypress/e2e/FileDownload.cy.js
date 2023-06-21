describe('Navigate to File Downloads ', () => {
    it('Download all the file', () => {
    cy.intercept('/some-3rd-party-script.js*').as('externalScript');
      cy.visit('https://practice.cydeo.com/')   
      cy.get('.list-group > :nth-child(18) > a').click({force:true})
     // cy.get('[href="download/some-file.txt"]').click().should('exist')
      cy.go('back')
      
      
      
  
    })
  })