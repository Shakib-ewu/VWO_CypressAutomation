describe("Verifying Fullstack", () => {

    beforeEach(() => {

        cy.viewport(1920,1080);
        cy.intercept('/some-3rd-party-script.js*').as('externalScript');
        cy.visit("https://app.vwo.com/#/login")
        cy.get('[data-qa="hocewoqisi"]').type('nocag98406@rc3s.com')
        cy.get('[data-qa="jobodapuxe"]').type('Ss@123456789').should('be.visible')
        cy.get('[data-qa="wusegasoju"] > .checkbox-radio').click()
        cy.get('[data-qa="sibequkica"]').click({force:true})

    })
    it("Verifying Full Flow of features", () => {
        cy.get('#js-navbar-server > .navbar-group-btn').click()
        cy.get('#js-navbar-server > [data-qa="nav-sub-group"] > :nth-child(1) > .navbar-sub-group-btn').click().should('be.visible')
        cy.wait(4000)
        //cy.get('#select-box-activator-0 > vwo-transclude > [data-qa="oqanadxozu"]').click()
        //cy.get('#select-box-next-option-0-2 > [data-qa="uugosdfapi"] > [data-qa="katugomaju"] > .select-box-option').click()
        cy.get('[data-qa="btn-create"]').click({force:true})
        cy.get('[data-qa="fofuvusuqu"]').type('Javascript')
        cy.get('[data-qa="xuwahaqenu"]').click()
        cy.get('[data-qa="gobikixeri"]').type('Char')
        cy.get('[data-qa="oqanadxozu"]').click()
        cy.get('#select-box-next-option-3-2 > [data-qa="uugosdfapi"] > [data-qa="katugomaju"] > .select-box-option').click()
        cy.get('[data-qa="tojuheliho"]').type('Demo')
        cy.get('[data-qa="1Ip2vuhc7csn1A7SG83"]').click()

    })
})