import 'cypress-iframe';
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
    it("Verifying Full Flow of Surveys", () => {
        cy.get('[data-qa="nav-main-insights"]').click()
        cy.wait(4000)
        cy.get('[data-qa="nav-main-analyze-survey"]').click().should('exist')
        cy.get('[data-qa="btn-create"]').click()
        cy.get("input[name='primaryUrl']").type('windy.com' , {force: true});
        cy.get('[data-qa="1Ip2vuhc7csn1A7SG83"]').click()
        cy.get('.selected > [data-qa="xinosofipo"] > [data-qa="vulenuvota"] > [data-qa="qewijeneru"] > [data-qa="qikuceyuka"]').click()
        cy.get('[data-qa="1Ip2vuhc7csn1A7SG83"]').click()
        cy.get('#select-box-activator-5 > vwo-transclude > [data-qa="oqanadxozu"]').click({force:true})
        cy.get('#select-box-next-option-5-2 > [data-qa="uugosdfapi"] > [data-qa="katugomaju"] > [data-qa="tixujujaka"]').click()
        cy.get("input[placeholder='Choice 1']").should('be.enabled').type('Button-1', {force: true}).should('be.visible')
        cy.get("input[placeholder='Choice 2']").should('be.enabled').type('Button-2', {force: true}).should('be.visible')
        cy.get('[data-qa="1Ip2vuhc7csn1A7SG83"]').click({force:true})
        cy.get('.survey-action-bar>.vwo-survey-close').click({force:true})
        cy.get('#select-box-activator-9 > vwo-transclude > [data-qa="oqanadxozu"]').click()
        cy.get('#select-box-next-option-9-0 > [data-qa="uugosdfapi"] > [data-qa="katugomaju"] > .select-box-option').click()
        cy.wait(1000)
        cy.get('#select-box-activator-10 > vwo-transclude > [data-qa="oqanadxozu"]').click()
        cy.get('#select-box-next-option-10-3 > [data-qa="uugosdfapi"]').click()
        cy.wait(1000)
        cy.get('[data-qa="custom-branding-image-option"]').attachFile('p.jpg').click().should('exist');
        cy.get('[data-qa="1Ip2vuhc7csn1A7SG83"]').click()
        cy.get('[data-qa="putinuyoci"] > .ng-binding').click()
        cy.get('[data-qa="1Ip2vuhc7csn1A7SG83"]').click()
        cy.get('[data-qa="btn-start-campaign"]').click()


        
    })
})