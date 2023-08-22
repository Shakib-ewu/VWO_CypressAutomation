describe("Verifying Insights", () => {

    beforeEach(() => {

        cy.viewport(1920,1080);
        cy.intercept('/some-3rd-party-script.js*').as('externalScript');
        cy.visit("https://app.vwo.com/#/login")
        cy.get('[data-qa="bericafeqo"]').click();

        const email = `lx123${Math.floor(100000 + Math.random() * 900000)}@gmail.com`;
        cy.get('[data-qa="page-su-step1-v1-email"]').type(email).should('be.visible');

        cy.get("div[class='Mt(10px) Ta(c)'] button[class='button W(100%) btn-modal-form-submit']").click({force:true})

        const randomName = `John${Math.floor(100 + Math.random() * 900)}`;
        cy.get('[data-qa="page-su-v1-fname"]').type(randomName).should('be.visible');

        //cy.get('[data-qa="page-su-v1-fname"]').type('demo')

        const lastName = `John${Math.floor(100 + Math.random() * 900)}`;
        cy.get('[data-qa="page-su-v1-lname"]').type(lastName).should('be.visible');

       // cy.get('[data-qa="page-su-v1-lname"]').type('Chris')
        cy.get('[data-qa="page-su-v1-pnumber"]').type('01723645867')
        function generateRandomPassword(length) {
            const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            let password = "";
          
            // Ensure at least one digit in the password
            const randomDigit = Math.floor(Math.random() * 10);
            password += charset.charAt(randomDigit + 52); // Adding 52 to start from the digit part of the charset
          
            for (let i = 1; i < length; i++) { // Start from 1 to account for the added digit
              const randomIndex = Math.floor(Math.random() * charset.length);
              password += charset.charAt(randomIndex);
            }
            return password;
          }
        const randomPassword = generateRandomPassword(10); // You can adjust the length as needed
        cy.get('[data-qa="page-su-v1-pwd"]').type(randomPassword).should('be.visible');

       // cy.get('[data-qa="page-su-v1-pwd"]').type('Sa123456789')
        cy.get("div[class='Mt(10px) Ta(c)'] button[class='button btn-modal-form-submit W(100%)']").click()
        cy.wait(20000)
        cy.get('[data-qa="yiyinoiunu"]').type('gmail.com')
        cy.get('#select-box-activator-0 > vwo-transclude > [data-qa="opesuxkore"]').click()
        cy.get('#select-box-next-option-0-1 > [data-qa="uugosdfapi"] > [data-qa="katugomaju"] > .select-box-option').click()
        cy.get('[data-qa="opesuxkore"]').click()
        cy.get('#select-box-next-option-1-5 > [data-qa="uugosdfapi"] > [data-qa="katugomaju"] > .select-box-option').click()
        cy.get('[data-qa="btn-next"]').click()
        cy.get('[data-qa="giyanibano"]').click()
        cy.get('[data-qa="btn-next"]').click()
        cy.wait(20000)
        cy.get('[data-qa="btn-next"]').click()
        cy.get("input[name='primaryUrl']").type('youtube.com')
        cy.get('[data-qa="btn-next"]').click()
        cy.get('[data-qa="btn-next"]').click()
        cy.get("button[class='btn btn--inverted btn--primary Px(20px) Mt(40px)']").click()
        
    })
    it("Verifying Full Flow of Insights", () => {
        cy.get('[data-qa="nav-main-insights"]').click()
        cy.get('[data-qa="nav-main-track-funnel"]').click().should('be.visible')
        cy.get('[data-qa="bogusetipe"]').click()
        cy.get('[data-qa="opesuxkore"]').click()
        cy.get('.dropdown-menu-add-item>.ng-binding').eq(0).click({force:true})
        cy.get('[data-qa="alert-modal-ok-button"]').click()
        cy.get('[data-qa="junegaxoye"]').eq(0).type('Funnels.com')
        cy.get('[data-qa="goal-create-button"]').click()
        cy.get('[data-qa="keromacovi"]').click()
        cy.get('#track-goal-notes').type('thank you')
        cy.get('[data-qa="junegaxoye"]').eq(0).type('test.com')
        cy.get('[data-qa="goal-create-button"]').click()
        cy.get('[data-qa="btn-start-campaign-later"]').click()
        cy.get('[data-qa="btn-url-mode-advance"]').click()
        cy.get('[data-qa="pogavefata"]').click()
        cy.get('[data-qa="nav-main-track-funnel"]').click()
        cy.get('[data-qa="bogusetipe"]').click()
        cy.get('[data-qa="opesuxkore"]').click()
        cy.get('#select-box-next-option-10-0 > [data-qa="uugosdfapi"] > [data-qa="katugomaju"] > [data-qa="ciwowehedi"]').click()
        cy.get('[data-qa="goal-add-new"]').click()
        cy.get('[data-qa="opesuxkore"]').click()
        cy.get('[data-qa="zidonotuci"] > [data-qa="satavigisi"] > [data-qa="xorohoyami"]').click()
        cy.get('[data-qa="alert-modal-ok-button"]').click()
        cy.get('[data-qa="junegaxoye"]').eq(0).type('Funnels.com')
        cy.get('[data-qa="goal-create-button"]').click()
        cy.get('[data-qa="keromacovi"]').click()
        cy.get('#track-goal-notes').type('Welcome')
        cy.get('[data-qa="junegaxoye"]').eq(0).type('openhrm.com')
        cy.get('[data-qa="goal-create-button"]').click()
        cy.get('[data-qa="btn-start-campaign-later"]').click()
        cy.get('[data-qa="btn-url-mode-advance"]').click()
        cy.get('[data-qa="pogavefata"]').click()
        cy.get('[data-qa="nav-main-track-funnel"]').click()
        cy.get('[data-qa="bogusetipe"]').click()
        cy.get('[data-qa="opesuxkore"]').click()
        cy.get('#select-box-next-option-16-0 > [data-qa="uugosdfapi"] > [data-qa="katugomaju"] > [data-qa="ciwowehedi"]').click()
        cy.get('[data-qa="goal-add-new"]').click()
        cy.get('[data-qa="opesuxkore"]').click()
        cy.get('#select-box-next-option-16-1 > [data-qa="uugosdfapi"] > [data-qa="katugomaju"] > [data-qa="ciwowehedi"]').click()
        cy.get('[data-qa="funnel-create-button"]').click()
        cy.get('[data-qa="btn-start-campaign-later"]').click()
        cy.get('[data-qa="funnel-name"]').should('have.text','New Funnel')







       
       

        

       


    })
})