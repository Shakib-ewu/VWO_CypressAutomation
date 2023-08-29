describe("Verifying Insights", () => {

    beforeEach(() => {

        cy.viewport(1920,1080);
        cy.intercept('/some-3rd-party-script.js*').as('externalScript');
        cy.visit("https://app.vwo.com/#/login")
        cy.get('[data-qa="hocewoqisi"]').type('nocag98406@rc3s.com')
        cy.get('[data-qa="jobodapuxe"]').type('Ss@123456789').should('be.visible')
        cy.get('[data-qa="wusegasoju"] > .checkbox-radio').click()
        cy.get('[data-qa="sibequkica"]').click({force:true})

    })
    it("Verifying Full Flow of Forms", () => {
        cy.get('[data-qa="nav-main-insights"]').click()
        cy.get('[data-qa="nav-main-analyze-form"]').click()
        cy.wait(4000)
        cy.get('[data-qa="nav-main-analyze-form"]').click().should('exist')
        cy.get('[data-qa="btn-create"]').click()
       cy.get("div[data-qa='xifonubice']").click()
       cy.get('[data-qa="tulipahiyo"]').click({force:true})
       cy.get('[data-qa="pagikiviku"]').type('HTML')
       cy.get('[data-qa="nevakesore"]').type('windy.com')
       cy.get('[data-qa="1Ip2vuhc7csn1A7SG83"]').click()

       cy.get('[data-qa="diquhewuyu"]').should('exist')
     
      })
    })
   
