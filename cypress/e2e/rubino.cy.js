describe("Verifying Homepage", () => {

    beforeEach(() => {

        cy.viewport(1920,1080);
        cy.intercept('/some-3rd-party-script.js*').as('externalScript');
        
        //cy.get('[data-qa="hocewoqisi"]').type('nocag98406@rc3s.com')
        //cy.get('[data-qa="jobodapuxe"]').type('Ss@123456789').should('be.visible')
        //cy.get('[data-qa="wusegasoju"] > .checkbox-radio').click()
        //cy.get('[data-qa="sibequkica"]').click({force:true})

    })
    it("Verifying Full Flow of Forms", () => {
        cy.visit("https://staging-39610c494b93efa8ddf8.o2.myshopify.dev/")
        //cy.get('[data-qa="nav-main-insights"]').click()
       // cy.get('[data-qa="nav-main-analyze-form"]').click()
        cy.wait(5000)
        cy.get("button[class='p-0 m-0 block md:inline-flex w-full']").click()
        cy.get("a[class='active']").click()
    })
})