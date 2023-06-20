describe('Navigating to Multiple Windows', () => {
    it('Validate windows', () => {
    cy.intercept('/some-3rd-party-script.js*').as('externalScript');
      cy.visit('https://practice.cydeo.com/')   
      cy.get('.list-group > :nth-child(39) > a').click({force:true})
     
      // The problem was on eof the radio button is disables that is why it's not working

      /*cy.get('.radio').each(($radioButton) => {
        cy.wrap($radioButton).find('input[type="radio"]').click().should('be.visible'); // or .click()
      });*/

      cy.get('.radio').each(($radioButton) => {
        const isDisabled = $radioButton.find('input[type="radio"]').is(':disabled');
        if (!isDisabled) {
          cy.wrap($radioButton)
            .find('input[type="radio"]')
            .click().should('be.checked'); // or .click()
        }
      });
      
      
      
     
  
    })
  })