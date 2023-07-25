describe('Navigating to Multiple Windows', () => {

    beforeEach('Navigate',()=>{
        cy.intercept('/some-3rd-party-script.js*').as('externalScript');
      cy.visit('https://practice.cydeo.com/')   
      cy.viewport(1280, 720)
      cy.get('.list-group > :nth-child(50) > a').click({force:true})
      

    })

    it('Check all rows and column number', () => {
        cy.get("table>tbody>tr").should('have.length','10')
    })

    it('Check cell data from specific row & column', () => {

        cy.get("table>tbody>tr:nth-child(5)>td:nth-child(7)").contains('McLean, VA')
    })

    it.only('Read all the rows & columns', () => {

        cy.get("table>tbody>tr").each(($row, index, $rows)=>{
            cy.wrap($row).within(()=>{
                cy.get("td").each(($col, index, $cols)=>{
                    cy.log($col.text());
                })
            })

        })
    })

  })

