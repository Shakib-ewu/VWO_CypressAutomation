describe("Verifying Split URL", () => {

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
    it("Split URL full flow testing", () => {
        cy.get('[data-qa="nav-main-test"]').click()
        cy.get('[data-qa="nav-main-test-split"]').click().should('be.visible');
        cy.get('[data-qa="rumuhacelo"]').click()
        //cy.get('').type
        const URL = `lx123${Math.floor(100000 + Math.random() * 900000)}.com`;
        cy.get('.flex-content-group-child>.input-wrapper--static-validation:nth-child(1)').eq(0).type(URL).should('be.visible');
        const URL1 = `lx123${Math.floor(100000 + Math.random() * 900000)}.com`;
        cy.get('.flex-content-group-child>.input-wrapper--static-validation:nth-child(1)').eq(1).
        type(URL1).should('be.visible');
        cy.get('[data-qa="xuxodedoqi"]').type('youtube.com')
        cy.get('[data-qa="1Ip2vuhc7csn1A7SG83"]').click({force:true});
        cy.get('[data-qa="fakevalozi"]').click()
        cy.get("div[class='border--top D(f) Jc(c) Py(10px)']").click()
        cy.get('#new-goal-name').type('Dell 5520')
        cy.get('[data-qa="wowaxayeki"]').click().should('be.visible');
        cy.get('[data-qa="1Ip2vuhc7csn1A7SG83"]').click();
        cy.get('[data-qa="jakowutesa jomafetebu"] > [data-qa="caxanizewo"] > [data-qa="hohalinuti"]').clear().type('55');
        cy.get('[data-qa="1Ip2vuhc7csn1A7SG83"]').click()
        cy.get('[data-qa="btn-preview-start-campaign"]').click();
        cy.get('[data-qa="live-preview-btn"]').click()
        
           
    })
})


    