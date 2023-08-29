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
    it("Verifying Full Flow of Insights", () => {
        cy.get('[data-qa="nav-main-insights"]').click()
        cy.wait(4000)
        cy.get('[data-qa="nav-main-analyze-heatmap"]').click().should('exist')
        //cy.get('[data-qa="yilubecahu"]').click()
        cy.get('[data-qa="tokuzuqofu"]').type('windy.com')
        cy.get('.checkbox-radio-label:nth-child(2)').eq(1).click({force:true})
        cy.get('[data-qa="lacutiyite"] > :nth-child(4)').click()
        cy.get('.checkbox-radio-label:nth-child(2)').eq(2).click({force:true}).should('be.visible')
        cy.get('[data-qa="doqiroquxo"]').click() 
    })
    it.only("Verifying full flow of Session recordings",()=>{
        cy.get('[data-qa="nav-main-insights"]').click()
        cy.wait(4000)
        cy.get('[data-qa="nav-main-analyze-recording"]').click().should('exist')
        cy.get('[data-qa="qiherabemo"]').click()

        const randomNumber = Math.floor(100 + Math.random() * 900);
        const baseURL = 'windy.com';
        //const randomURL = `${baseURL}`;
        cy.get('[data-qa="ricekimaki"]').eq(0).type(baseURL).should('be.visible');

       //cy.get('.checkbox-radio-label:nth-child(2)').eq(0).click({force:true})
       cy.get('[data-qa="lecuhibeme"]').click()
       cy.get('[data-qa="zazoxofego"]').click()
       cy.get('[data-qa="miwivenoje"] > :nth-child(1)').click({force:true})
       cy.get('[data-qa="add-new-schedule"]').click()
       cy.get('[data-qa="nadoqazuxo"]').eq(0).click({force:true})
       //cy.get('#select-box-activator-9> vwo-transclude > [data-qa="oqanadxozu"]').eq(0).click()
       //cy.get('#select-box-next-option-8-2 > [data-qa="uugosdfapi"] > [data-qa="katugomaju"] > [data-qa="zidukunaki"]').click()
       //cy.get('#select-box-next-option-9-2 > [data-qa="uugosdfapi"] > [data-qa="katugomaju"] > [data-qa="zidukunaki"]').click()
       //cy.get('[data-qa="wobetajusi"]').type('12').should('exist')
       cy.get('[data-qa="golowodeyo"]').click()
       cy.get('[data-qa="1Ip2vuhc7csn1A7SG83"]').click()
       cy.get('.step-counter-button--next').click({force:true})
       cy.get('[data-qa="campaign-status-btn"]').click()
       cy.wait(10000)
      cy.get('[data-qa="campaign-status-btn"]').eq(1).click({force:true})
      cy.get('[data-qa="campaign-name"]').should('have.text','View 15')


    })


})