describe("Sign In", () => {

    beforeEach(() => {

        cy.intercept('/some-3rd-party-script.js*').as('externalScript');
        cy.visit("https://app.vwo.com/#/login")
    })
    it("Sign in with new email and password", () => {

        cy.get('[data-qa="bericafeqo"]').click()
        //cy.get('[data-qa="page-su-step1-v1-email"]').type('hesodo9946@tiuas.com')

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

       //cy.get('#select-box-activator-1 > vwo-transclude > [data-qa="opesuxkore"]').click()
       //cy.get('#select-box-next-option-1-7 > [data-qa="uugosdfapi"] > [data-qa="katugomaju"] > .select-box-option')


      /*cy.get('#select-box-activator-1 > vwo-transclude > [data-qa="opesuxkore"]').click() 
       cy.get('#select-box-next-option-1-6 > [data-qa="uugosdfapi"] > [data-qa="katugomaju"] > .select-box-option]').each(($ele) => {
    if ($ele.text() == "up to 100k visitors/month") {
        cy.wrap($ele).click()
    }
})*/
       /*cy.get("activator[id='select-box-activator-0'] div[role='button']").each(function($ele,index,list) {
        if ($ele.text() === 'up to 50k visitors/month') {
          cy.log('found element')
          cy.wrap($ele).click()
        } else {
          cy.log('not found')
        }
      })*/
       
     /*    cy.get("#atomic > body > vwo-transclude.open > menu-content > div.D\\(f\\) > [data-qa='yipafesefo'] > div.Fxg\\(1\\) > div > [data-qa='giguqaloro'] > [data-qa='keboginici'] option-slot").each(function($ele,index,list) {
            if ($ele.text() === 'Entertainment') {
              cy.log('found element')
              cy.wrap($ele).click()
            } else {
              cy.log('not found')
            }
          })*/
      
       // cy.get("activator[id='select-box-activator-1'] div[role='button']").select('Entertainment')
        cy.get('[data-qa="btn-next"]').click()
        cy.get('[data-qa="giyanibano"]').click()
        cy.get('[data-qa="btn-next"]').click()
        cy.wait(15000)
        cy.get('[data-qa="btn-next"]').click()
        cy.get("input[name='primaryUrl']").type('youtube.com')
        cy.get('[data-qa="btn-next"]').click()
        cy.get('[data-qa="btn-next"]').click()
        cy.get("button[class='btn btn--inverted btn--primary Px(20px) Mt(40px)']").click()

        //cy.get('.js-free-trial-form-step1-container > [data-qa="page-su-form"] > .Mt\(10px\) > [data-qa="page-su-submit"]').click()

        
           
    })
})


    