describe("Verifying Dashboard", () => {

    beforeEach(() => {

        cy.intercept('/some-3rd-party-script.js*').as('externalScript');
        cy.visit("https://app.vwo.com/#/login")
        cy.get('[data-qa="bericafeqo"]').click();

        const email = `lx123${Math.floor(100000 + Math.random() * 900000)}@cydeo.com`;
        cy.get('[data-qa="page-su-step1-v1-email"]').type(email).should('be.visible');

        cy.get("div[class='Mt(10px) Ta(c)'] button[class='button W(100%) btn-modal-form-submit']").click({force:true})
        cy.get('[data-qa="page-su-v1-fname"]').type('demo')
        cy.get('[data-qa="page-su-v1-lname"]').type('Chris')
        cy.get('[data-qa="page-su-v1-pnumber"]').type('01723645867')
        cy.get('[data-qa="page-su-v1-pwd"]').type('Sa123456789')
        cy.get("div[class='Mt(10px) Ta(c)'] button[class='button btn-modal-form-submit W(100%)']").click()
        cy.wait(20000)
        cy.get('#select-box-activator-0 > vwo-transclude > [data-qa="opesuxkore"]').click()
        cy.get('#select-box-next-option-0-1 > [data-qa="uugosdfapi"] > [data-qa="katugomaju"] > .select-box-option').click()
        cy.get('[data-qa="opesuxkore"]').click()
        cy.get('#select-box-next-option-1-5 > [data-qa="uugosdfapi"] > [data-qa="katugomaju"] > .select-box-option').click()
        cy.get('[data-qa="btn-next"]').click()
        cy.get('[data-qa="giyanibano"]').click()
        cy.get('[data-qa="btn-next"]').click()
        cy.wait(15000)
        cy.get('[data-qa="btn-next"]').click()
        cy.get("input[name='primaryUrl']").type('youtube.com')
        cy.get('[data-qa="btn-next"]').click()
        cy.get('[data-qa="btn-next"]').click()
        cy.get("button[class='btn btn--inverted btn--primary Px(20px) Mt(40px)']").click()
        
    })
    it("Sign in with email and password", () => {
      cy.get('[data-qa="nav-main-home"] > [data-qa="nav-label"]').click()
        cy.get('.page-heading').should('have.text','Dashboard')
        cy.wait(1000)
        cy.get('[data-qa="goals-empty-state-btn"]').click()
        cy.get("button[title='Edit goal name']").click();
        cy.get("input[placeholder='Goal Name']").clear();
        cy.get("input[placeholder='Goal Name']").type('Sakib Net goal');
        cy.get('[data-qa="oqanadxozu"]').click()
        cy.get('#select-box-next-option-3-4 > [data-qa="uugosdfapi"] > [data-qa="katugomaju"] > .select-box-option').click()
        cy.get('[data-qa="junegaxoye"]').type('shopify.com')
        cy.get('[data-qa="junegaxoye"]').type('bdhfbeh.com')
        cy.get('.step-counter-button.step-counter-button--next').click()
         // second div for typo
       // cy.get('[data-qa="hayasuqopi"]').type('lx.com')//hayasuqopi
        cy.get('[data-qa="keromacovi"]').click()
        cy.get('[data-qa="pitomicowo"]').type('Thank you')
        cy.get('[data-qa="add-labels"] > span').click()
        cy.get("input[placeholder='Labels']").type('Button')
        cy.get('[data-qa="hayasuqopi"]').type('lx.com')
        cy.get('[data-qa="goal-create-button"]').click()
        cy.get("button[class='Fxs(0) btn']").click()
        cy.get('[data-qa="btn-url-mode-advance"]').click()
        cy.get('[data-qa="pogavefata"]').click().should('be.visible');

        //cy.get("button[title='Edit goal name']").click().type('dfef')

       
           
    })
})


    