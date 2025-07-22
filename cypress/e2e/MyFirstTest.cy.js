/// <reference types="cypress"/>

// const { should } = require("chai");

describe('My First Test', () =>
{
    it('test 1', () => {

        cy.clearAllCookies();
        cy.visit("dev-admin.enrollment.nexcaliber.com/login",{timeout:60000})

    cy.then(()=>{

    
        cy.get('#select-role-container > .MuiButtonBase-root > .MuiButton-label').click()
        cy.get('.MuiList-root > [tabindex="0"]').click()

        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('Debajyoti')
        cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type('GBTech@2025{enter}',{timeout:60000})

        cy.contains('Brookshire',{timeout:60000}).click({force:true},{timeout:60000})
        cy.contains('Members').click({force:true},{timeout:60000})

        // cy.on('window:alert', (text) => {
        //  expect(text).to.equal('Failed to fetch data');
        // });

    cy.get('[aria-colindex="5"] > .ag-floating-filter-body > .ag-react-container > .inputWithSearchFilter > .customFloatingFilter',{timeout:60000}).click({force:true})

      cy.then(()=>{
        cy.get('[aria-colindex="5"] > .ag-floating-filter-body > .ag-react-container > .inputWithSearchFilter > .customFloatingFilter',{timeout:6000}).should('be.visible')
        .type('555776666{enter}',{timeout:10000})
       });

        cy.wait(6000)
       

        cy.get('[comp-id="195"]').should('be.visible').should('have.text','DFull').click({force:true});

        cy.then('Checking Employement Link',() => {
            cy.contains('Employment').should('be.visible').click();
        })
        cy.wait(6000)

         cy.then('Checking Core Benifit',() => {
            cy.contains('Core Benefits').click();
        })
        cy.wait(6000)

         cy.then('Checking VEB Benifits',() => {
            cy.contains('VEB Benefits').click();
        })
        cy.wait(6000)

        //  cy.then('Checking Notes',() => {
        //     cy.contains('Notes').click();
        // })
        cy.wait(6000)

         cy.then('Checking Employement Link',() => {
            cy.contains('Text Sending').click();
        })

        cy.wait(6000);

        cy.then('Checking Employement Link',() => {
            cy.contains('Member &').click();
        })

        // cy.contains('Member Portal').should('have.text','Open Member Portal').click();

        cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click()
        cy.get(':nth-child(5) > #dynamic-information-form-container > .pf-grid-container > .MuiPaper-root > :nth-child(6) > .pf-label > .MuiGrid-grid-md-9 > .MuiFormControl-root > .MuiInputBase-root > #first-name-input')
        
        // cy.get(':nth-child(5) > #dynamic-information-form-container > .pf-grid-container > .MuiPaper-root > :nth-child(6) > .pf-label > .MuiGrid-grid-md-9 > .MuiFormControl-root > .MuiInputBase-root > #first-name-input')
        // .invoke('text')
        // .then((text) => {
        //         expect(text.valueOf()).to.equal('555776666')
        // })
        

        
        

        // cy.get('.ag-body-horizontal-scroll-viewport')

        
        

        // cy.get('.button-label-with-icon').
        // should('be.visible').
        // should('not.be.disabled').
        // should('have.text','Login').
        // // should('have.focus')
        // click({force:true}).wait(5);

        

        // cy.wait('@loginRequest').its('response.statusCode').should('eq',200)
        
        

        // cy.title().should('eq', "Flipkart")

    })
})
})