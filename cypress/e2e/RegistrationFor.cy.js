describe('Registration Form Validation', () => {
    it('Check different input box fields and verify', () => {
    cy.intercept('/some-3rd-party-script.js*').as('externalScript');
      cy.visit('/')   
      cy.get('.list-group > :nth-child(41) > a').click({force:true})

      cy.get('.form-control').eq(0).type('Fahim').should('be.visible')
      cy.get('.form-control').eq(1).type('Mahmud').should('be.visible')
      cy.get('.form-control').eq(2).type('Lxplxmahmud').should('be.visible')

      const email = `lx123${Math.floor(100000 + Math.random() * 900000)}@cydeo.com`;
      cy.get('input[name="email"]').type(email).should('be.visible');
      const password = `lx${Math.floor(100000 + Math.random() * 900000)}`;
      cy.get('input[name="password"]').type(password).should('be.visible');
      const phoneNumber = `555-000-${Math.floor(1000 + Math.random() * 9000)}`; // 4 digit extension number
      cy.get('input[name="phone"]').type(phoneNumber).should('be.visible');
      cy.get('input[name="birthday"]').type('01/01/1999').should('be.visible');
    })

    it('Validating radio buttons',()=>{
        cy.visit('/') 
        cy.get('.list-group > :nth-child(41) > a').click({force:true})
        cy.get('.radio').find('[type=radio]').then((radio) => {
          // get all radio buttons, select the first one and verify that it is checked
          cy.wrap(radio).eq(0).check().should('be.checked'); 
          cy.wrap(radio).eq(1).check().should('be.checked');
          cy.get('[data-bv-icon-for="gender"]').should('be.visible'); 
          cy.wrap(radio).eq(2).should('not.be.checked');
        });
    })
    it('Validating dropdowns',()=>{
        cy.visit('/') 
        cy.get('.list-group > :nth-child(41) > a').click({force:true})
            cy.fixture('dept').then((dept) => {
              cy.get('select[name="department"] > option').each((option, index) => {
                const optionText = option.text();
                cy.get('select[name="department"]')
                  .select(optionText)
                  .should('have.value', option.val())
                  .contains(dept[index]);
              });
            });
          });

          it('Check selection of a single choice from a select dropdown', () => {
            cy.visit('/') 
            cy.get('.list-group > :nth-child(41) > a').click({force:true})
            cy.get('select[name="job_title"]').select('SDET').contains('SDET');
          
          });

          it('Check different checkbox actions', () => {
            cy.visit('/') 
            cy.get('.list-group > :nth-child(41) > a').click({force:true})
            cy.get('[type="checkbox"]').then((checkbox) => {
              cy.wrap(checkbox).eq(1).check().should('be.checked');
              cy.wrap(checkbox).eq(1).uncheck().should('not.be.checked');
              cy.wrap(checkbox).eq(2).should('have.value', 'javascript').check().should('be.checked');
            });
          });

          it('Sign Up',()=>{
            cy.visit('/') 
            cy.get('.list-group > :nth-child(41) > a').click({force:true})
            cy.get('#wooden_spoon').click()

          })


    })
 