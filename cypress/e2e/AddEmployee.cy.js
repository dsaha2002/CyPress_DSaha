require('Cypress-xpath'),

describe('My First Test', () =>
{
    it('Add Employee', () => {

        cy.clearAllCookies();
        cy.visit("dev-admin.enrollment.nexcaliber.com/login",{timeout:60000})

        cy.then(()=>{
            cy.get('#select-role-container > .MuiButtonBase-root > .MuiButton-label').click()
            cy.get('.MuiList-root > [tabindex="0"]').click()

            cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('Debajyoti')
            cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type('GBTech@2025{enter}',{timeout:60000})

            cy.contains('Brookshire',{timeout:60000}).click({force:true},{timeout:60000})
            // cy.contains('Members').click({force:true},{timeout:60000})
            cy.xpath("//body/div[@id='root']/div/div[@id='employer-sidebar-container']/div/nav[@aria-label='mailbox folders']/div/div/div/div[@id='employer-dashboard']/ul/div[2]/div[1]/div[1]/div[2]")
             .click({force:true},{timeout:60000})
        })


    })
})