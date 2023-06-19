describe('Navigate to JS Alerts ', () => {
    it('Js alert -ok button', () => {

      cy.visit('/')   
      cy.get('.list-group > :nth-child(30) > a').click({force:true})
      cy.get('[onclick="jsAlert()"]').click().should('be.visible');
      cy.on('windows:alert',(t)=>{
        expect(t).to.contains('I am a JS Alert')
    })
    cy.get('#result').should('have.text','You successfully clicked an alert')
    })

    it('Js alert -ok confirm', () => {

        cy.visit('/')   
        cy.get('.list-group > :nth-child(30) > a').click({force:true})
        cy.get('[onclick="jsConfirm()"]').click().should('be.visible');
        cy.on('windows:alert',(t)=>{
          expect(t).to.contains('I am a JS Alert')
      })
      cy.get('#result').should('have.text','You clicked: Ok')
      })

      it('Js alert -Prompt',()=>
     {
        cy.visit("/")
        cy.get('.list-group > :nth-child(30) > a').click({force:true})

              cy.window().then((sakib)=>{
                cy.stub(sakib,'prompt').returns('welcome')

              })

        //here cancel is not working will into this later

        cy.get('[onclick="jsPrompt()"]').click()
        cy.get('#result').should('have.text','You entered: welcome')

        
        
       
     })


  })