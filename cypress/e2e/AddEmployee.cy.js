require('Cypress-xpath');

const { AddEmployee } = require('./Login_Data');

const addEmployee = new AddEmployee();


describe('Add Employee Regression', () =>
{
    it('Add Employee', () => {

        cy.clearAllCookies();
        cy.visit(addEmployee.nexcal_url,{timeout:60000})

        cy.then(()=>{
            cy.xpath(addEmployee.role_dropdown_locator).click({force:true}) 
            cy.xpath(addEmployee.super_admin_role_locator).click({force:true})

            cy.get(addEmployee.username_locator).type(addEmployee.username_value)
            cy.get(addEmployee.password_locator).type(addEmployee.password_value,{timeout:60000})

            cy.xpath(addEmployee.login_button_locator).click({force:true},{timeout:60000})

            cy.contains('Brookshire',{timeout:60000}).click({force:true},{timeout:60000})
            
            cy.xpath(addEmployee.member_sidebar_locator)
             .click({force:true},{timeout:60000})
            
            cy.xpath(addEmployee.add_employee_button_locator).should('be.visible').click({force:true});

            cy.xpath(addEmployee.employee_id_locator).type('9999')

            cy.xpath(addEmployee.first_name_locator).type('FirstName')

            cy.xpath(addEmployee.last_name_locator).type('LastName')

            cy.xpath(addEmployee.ssn_locator).type('666778888')

            cy.xpath(addEmployee.re_enter_ssn_locator).type('666778888')

            cy.xpath(addEmployee.gender_dropdown_locator).click({force:true})
            cy.xpath(addEmployee.gender_female).click({force:true})

            cy.xpath(addEmployee.marital_status_dropdown_locator).click({force:true})  
            cy.xpath(addEmployee.marital_status_married).click({force:true})

            cy.xpath(addEmployee.employee_class_dropdown_locator).click({force:true})
            cy.xpath(addEmployee.employee_class_full_time).click({force:true})

            cy.xpath(addEmployee.location_dropdown_locator).click({force:true})
            cy.contains(addEmployee.full_location).click({force:true})  

            addEmployee.payment('Monthly','Hourly');


            

        //    for(let i = 2; i <= 60; i++) {
        //     cy.xpath("//div[5]//div[2]//div[8]//div[1]//div[2]//div[1]//div[1]").click({force:true});
        //     cy.xpath("//*[@id='menu-state']/div[3]/ul/li["+i+"]").click({force:true});
        //     cy.wait(1000);
        //     cy.xpath("//div[5]//div[2]//div[8]//div[1]//div[2]//div[1]//div[1]").click({force:true});
        //    }

        //    addEmployee.selectStates(2,60);
           
           addEmployee.selectContact('Mobile')
           
           cy.xpath(addEmployee.email_text_box_locator).type('dsaha@yop.com')

           cy.xpath(addEmployee.phone_number_text_box_locator).type('87463516864')               

           cy.xpath(addEmployee.phone_extension_text_box_locator).type('123')

           cy.xpath(addEmployee.address_1_text_box_locator).type('123 Main St')

           cy.xpath(addEmployee.address_2_text_box_locator).type('Apt 4B')

           cy.xpath(addEmployee.city_text_box_locator).type('Anytown')

           cy.xpath(addEmployee.zip_code_text_box_locator).type('63584863')

           cy.xpath(addEmployee.test_emp_radio_button_locator).should('not.be.checked')

           cy.xpath(addEmployee.test_emp_radio_button_locator).click().should('be.checked')

            cy.wait(6000);
            
            
            
            
            
            
            
            
            
            
            //    cy.get('[aria-colindex="5"] > .ag-floating-filter-body > .ag-react-container > .inputWithSearchFilter > .customFloatingFilter',{timeout:60000}).click({force:true})
            
            //  cy.xpath('//*[@id="employer-sidebar-container"]/div/main/div[2]/div[2]/div/div/div/div[1]/div[2]/div[1]/div[2]/div/div[2]/div[5]/div[1]/div/div/input')
            // .should('be.visible')
            // .type('555776666{enter}',{timeout:10000})

            // cy.xpath("//body//div[@id='root']//div[@role='presentation']//div[@role='presentation']//div[@role='presentation']//div[@role='rowgroup']//div[2]")
            // .should('be.visible').should('have.text','DFull').click({force:true});
        })


    })
})

