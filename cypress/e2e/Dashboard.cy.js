describe("Verifying Homepage", () => {

    beforeEach(() => {

        cy.viewport(1920,1080);
        cy.intercept('/some-3rd-party-script.js*').as('externalScript');
        cy.visit('/')
        cy.get("button[class='p-0 m-0 block md:inline-flex w-full']").contains('accept').click()
        cy.wait(4000)
        
        //cy.get('[data-qa="hocewoqisi"]').type('nocag98406@rc3s.com')
        //cy.get('[data-qa="jobodapuxe"]').type('Ss@123456789').should('be.visible')
        //cy.get('[data-qa="wusegasoju"] > .checkbox-radio').click()
        //cy.get('[data-qa="sibequkica"]').click({force:true})
        //cy.get("a[class='active']").click() logo click

    })
    it.skip("Verifying Hero Banner", () => {
       
        cy.wait(4000)
        cy.get("button[class='p-0 m-0 block md:inline-flex w-full']").contains('accept').click()
        cy.get('.swiper-slide-active > .relative > .absolute').click()
        cy.get('.h-full > .text-center').contains('All Products')
        cy.wait(5000)
        cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()
        cy.get('.swiper-pagination > :nth-child(2)').click()
        cy.get('.swiper-slide-active > .relative > .absolute > .flex-col > .flex > .inline-flex').click()
        cy.get('.h-full > .text-center').contains('Reebok')
        cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()
        cy.get('.swiper-pagination > :nth-child(3)').click()
        cy.get('.swiper-slide-active > .relative > .absolute > .flex-col > .flex > .inline-flex').click()
        cy.get('.h-full > .text-center').contains('Converse')
        cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()
        cy.get('.swiper-pagination > :nth-child(4)').click()
        cy.get('.swiper-slide-active > .relative > .absolute > .flex-col > .flex > .inline-flex').click()
        cy.get('.h-full > .text-center').contains('Steve Madden')
        cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()

    })

    it("Brand Scroller verification" , ()=>{
        cy.get('.brand-container > :nth-child(1) > .swiper').should('be.visible')
        cy.get('.swiper-slide-active > .w-full').eq(1).click({force:true})
        cy.get('.h-full > .text-center').contains('Crocs')
        cy.get("body > header:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > a:nth-child(1)").click()
    })
})