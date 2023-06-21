import 'cypress-iframe';
describe('Validating iframes ', () => {
    it('Approch -1', () => {
    cy.intercept('/some-3rd-party-script.js*').as('externalScript');
      cy.visit('https://practice.cydeo.com/')   
      cy.get('.list-group > :nth-child(49) > a').click({force:true})
       const iFrame= cy.get('#mce_0_ifr')
       .its('0.contentDocument.body')
       .should('be.visible')
       .then(cy.wrap);

       iFrame.clear().type("test {ctrl+a}");

       cy.get('[aria-label="Bold"]').click();
  
    })

    it('Approch -2', () => {
        cy.intercept('/some-3rd-party-script.js*').as('externalScript');
          cy.visit('https://practice.cydeo.com/')   
          cy.get('.list-group > :nth-child(49) > a').click({force:true})
          cy.getIframe('#mce_0_ifr').clear().type("Sakib SS {ctrl+a}");
        cy.get('[aria-label="Bold"]').click();
      
        })

        it.only('Approch -3', () => {
            cy.intercept('/some-3rd-party-script.js*').as('externalScript');
              cy.visit('https://practice.cydeo.com/')   
              cy.get('.list-group > :nth-child(49) > a').click({force:true})
              cy.frameLoaded('#mce_0_ifr');
              cy.iframe('#mce_0_ifr').clear().type("Sakib SS {ctrl+a}");
            cy.get('[aria-label="Bold"]').click();
          
            })
      })
