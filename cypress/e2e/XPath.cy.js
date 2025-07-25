require('Cypress-xpath'),


it('BstackDemo successful login', () =>{
cy.visit('https://www.bstackdemo.com/signin/')
cy.get("#username").click();
cy.xpath("//div[text()='demouser']").click();
cy.get("#password").click();
cy.xpath("//div[text()='testingisfun99']").click();
cy.get("#login-btn").click();
cy.get("#logout").should('have.text','Logout')
cy.get("#logout").click();
cy.get("#signin").should('have.text','Sign In')
})


it('BstackDemo failed login', () =>{
cy.visit('https://www.bstackdemo.com/signin/')
cy.get("#username").click();
cy.xpath("//div[text()='demouser']").click();
cy.get("#password").type('ddd{enter}');

cy.xpath('//*[@id="login-btn"]').click()
cy.get("#login-btn").click();
cy.xpath('//*[@id="__next"]/div[2]/div').should('have.text','demouserdddLog InInvalid Password')
cy.log('invalid password')
})


if(weekly_dropdown){
    if(flat_dropdown)
    {
        //weekly base rate locator


    }elseif(hourly_dropdown)
    {
        //hourly base rate locator
    }
}elseif(monthly_dropdown)
{
    if(flat_dropdown)
    {
        //monthly base rate locator

    }elseif(hourly_dropdown)
    {
        //hourly base rate locator
    }
}

