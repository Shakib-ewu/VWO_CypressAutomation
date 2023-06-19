describe('Navigating to Multiple Buttons', () => {
    it('Checking multiple buttons', () => {
    cy.intercept('/some-3rd-party-script.js*').as('externalScript');
    
    cy.clearCookies();
      cy.visit('https://practice.cydeo.com/')   
      cy.get('.list-group > :nth-child(34) > a').click({force:true})
      cy.contains('Button 2').should('be.visible').click();
    cy.contains('Clicked on button two!').should('be.visible');

    cy.get('.btn.btn-primary').then(($buttons) => {
        cy.wrap($buttons).eq(2).click(); // zero indexed list now
        // in List Java, list.get(index)
        // assert the text
        cy.contains('Clicked on button three!').should('be.visible');
      });

      cy.get('button').each((item, index, list) => {
        // assert length of the list, verify number of buttons
        expect(list).to.have.length(6);
        expect(item).to.have.attr('onclick');
      });

      cy.get('#disappearing_button').click()
      cy.get('#result').should('have.text',"Now it's gone!")

     
  
    })
  })