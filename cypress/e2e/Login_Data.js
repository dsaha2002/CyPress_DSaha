export class AddEmployee {


nexcal_url = "dev-admin.enrollment.nexcaliber.com/login"
username_locator = ':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input';
password_locator = ':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input';
username_value = 'Debajyoti'
password_value = 'GBTech@2025'
member_sidebar_locator ="//body/div[@id='root']/div/div[@id='employer-sidebar-container']/div/nav[@aria-label='mailbox folders']/div/div/div/div[@id='employer-dashboard']/ul/div[2]/div[1]/div[1]/div[2]"
login_button_locator = '//*[@id="login-button-container"]/button/span[1]/span[1]';
role_dropdown_locator = '//*[@id="select-role-container"]/button/span[1]'
super_admin_role_locator = '//*[@id="simple-menu"]/div[3]/ul/li[1]'
add_employee_button_locator = '//*[@id="pf-action-button-container"]/button[3]/span[1]/span[1]';
employee_id_locator = '//*[@id="create-employee"]/div[2]/div[2]/div[2]/div[1]/div/div[2]/div/div';
first_name_locator = '//*[@id="input-text-field" and @placeholder="Enter first name"]';
last_name_locator = '//*[@id="input-text-field" and @placeholder="Enter last name"]';
ssn_locator = '//*[@id="input-text-field" and @placeholder="Enter SSN"]';
re_enter_ssn_locator = '//*[@id="input-text-field" and @placeholder="Re-Enter SSN"]';
gender_dropdown_locator = '//*[@id="create-employee"]/div[2]/div[2]/div[2]/div[9]/div/div[2]/div/div';
gender_male = '//*[@id="menu-gender"]/div[3]/ul/li[2]';
gender_female = '//*[@id="menu-gender"]/div[3]/ul/li[3]';
gender_others = '//*[@id="menu-gender"]/div[3]/ul/li[4]';
marital_status_dropdown_locator = "//div[@id='create-employee']//div//div[2]//div[2]//div[10]//div[1]//div[2]//div[1]//div[1]";
marital_status_single = '//*[@id="menu-marital_status"]/div[3]/ul/li[2]'
marital_status_married = '//*[@id="menu-marital_status"]/div[3]/ul/li[3]'
marital_status_divorced = '//*[@id="menu-marital_status"]/div[3]/ul/li[4]'
marital_status_common_law_marriage = '//*[@id="menu-marital_status"]/div[3]/ul/li[5]'
employee_class_dropdown_locator = "//div[@id='employer-sidebar-container']//div[3]//div[2]//div[2]//div[1]//div[2]//div[1]//div[1]";
employee_class_part_time = '//*[@id="menu-employee_class"]/div[3]/ul/li[2]'
employee_class_full_time = '//*[@id="menu-employee_class"]/div[3]/ul/li[3]'
employee_class_PTIN= '//*[@id="menu-employee_class"]/div[3]/ul/li[4]'
location_dropdown_locator = "//div[4]//div[2]//div[1]//div[1]//div[2]//div[1]//div[1]"
address_text = 'Brookshire Brothers Express'
pin_code = '78'
full_location = this.pin_code + '- ' + this.address_text
pay_frequency_dropdown_locator = "//div[4]//div[2]//div[3]//div[1]//div[2]//div[1]//div[1]";
pay_frequency_monthly = '//*[@id="menu-pay_frequency"]/div[3]/ul/li[3]';
pay_frequency_weekly = '//*[@id="menu-pay_frequency"]/div[3]/ul/li[2]';
rate_frequency_hourly = '//*[@id="menu-rate_type"]/div[3]/ul/li[3]';
rate_frequency_flat = '//*[@id="menu-rate_type"]/div[3]/ul/li[2]';
rate_type_dropdown_locator = "//div[4]//div[2]//div[4]//div[1]//div[2]//div[1]//div[1]";
weekly_pay_text_box_locator = '//*[@id="input-text-field" and @name="weekly_base_rate"]';
hourly_base_pay_text_box_locator = '//*[@id="input-text-field" and @name="hourly_base_pay_rate"]';
monthly_base_pay_text_box_locator = '//*[@id="input-text-field" and @name="monthly_base_rate"]';
weekly_flat_value = '10';
weekly_hourly_value = '10';
monthly_flat_value = '10';
monthly_hourly_value = '10';
contact_label_locator = "//div[5]//div[2]//div[1]//div[1]//div[2]//div[1]//div[1]";
business_option = '//*[@id="menu-contact_label"]/div[3]/ul/li[2]'
home_option = '//*[@id="menu-contact_label"]/div[3]/ul/li[3]'
mail_option = '//*[@id="menu-contact_label"]/div[3]/ul/li[4]'
mobile_option = '//*[@id="menu-contact_label"]/div[3]/ul/li[5]'
other_option = '//*[@id="menu-contact_label"]/div[3]/ul/li[6]'
email_text_box_locator = '//*[@id="input-text-field" and @placeholder="Enter email"]'
phone_number_text_box_locator = '//*[@id="input-text-field" and @placeholder="Enter phone number"]'
phone_extension_text_box_locator = '//*[@id="input-text-field" and @placeholder="Enter phone extension"]'
address_1_text_box_locator = '//*[@id="input-text-field" and @placeholder="Enter address line 1"]'
address_2_text_box_locator = '//*[@id="input-text-field" and @placeholder="Enter address line 2"]'
city_text_box_locator = '//*[@id="input-text-field" and @placeholder="Enter city"]'
zip_code_text_box_locator = '//*[@id="input-text-field" and @placeholder="Enter ZIP"]'
test_emp_radio_button_locator = "//div[@id='employer-sidebar-container']//div[3]//div[1]//label[1]//span[1]//span[1]//input[1]"

payment(frequency, rate_type){
if(frequency == 'Weekly')
{
    cy.xpath(this.pay_frequency_dropdown_locator).click({force:true});
    cy.xpath(this.pay_frequency_weekly).click({force:true});
    if(rate_type == 'Flat')
    {
        //weekly base rate locator
        cy.xpath(this.rate_type_dropdown_locator).click({force:true});
        cy.xpath(this.rate_frequency_flat).should('be.visible').click({force:true});
        cy.xpath(this.weekly_pay_text_box_locator).type(this.weekly_flat_value);


    }else if(rate_type == 'Hourly')
    {
        //hourly base rate locator
        cy.xpath(this.rate_type_dropdown_locator).click({force:true});
        cy.xpath(this.rate_frequency_hourly).should('be.visible').click({force:true});
        cy.xpath(this.hourly_base_pay_text_box_locator).type(this.weekly_hourly_value);
    }
}else if(frequency == 'Monthly')
{
    cy.xpath(this.pay_frequency_dropdown_locator).click({force:true});
    cy.xpath(this.pay_frequency_monthly).click({force:true});
    if(rate_type == 'Flat')
    {
        //monthly base rate locator
        cy.xpath(this.rate_type_dropdown_locator).click({force:true});  
        cy.xpath(this.rate_frequency_flat).should('be.visible').click({force:true});
        cy.xpath(this.monthly_base_pay_text_box_locator).type(this.monthly_flat_value);



    }else if(rate_type == 'Hourly')
    {
        cy.xpath(this.rate_type_dropdown_locator).click({force:true});
        cy.xpath(this.rate_frequency_hourly).should('be.visible').click({force:true});
        cy.xpath(this.hourly_base_pay_text_box_locator).type(this.monthly_hourly_value);
        //hourly base rate locator

    }
}
}

selectStates(first,last) 
{
  if (first > last)
    {
      return;
    }else{

  cy.xpath("//div[5]//div[2]//div[8]//div[1]//div[2]//div[1]//div[1]")
    .click({ force: true });

  cy.xpath(`//*[@id='menu-state']/div[3]/ul/li[${first}]`)
    .click({ force: true });

  cy.wait(1000); // 1 second delay

  // Click again to reopen dropdown (if needed)
  cy.xpath("//div[5]//div[2]//div[8]//div[1]//div[2]//div[1]//div[1]")
    .click({ force: true });

  // Recursively call for next item
  cy.then(() => {
    this.selectStates(first + 1, last)
  });
}
}

selectContact(option){
  if (option == 'Business') 
  {
      cy.xpath(this.contact_label_locator).click({ force: true });
      cy.xpath(this.business_option).click({ force: true });
  } 
  else if (option == 'Home') 
  {
      cy.xpath(this.contact_label_locator).click({ force: true });
      cy.xpath(this.home_option).click({ force: true });
  }else if (option == 'Mail')
  {
      cy.xpath(this.contact_label_locator).click({ force: true });
      cy.xpath(this.mail_option).click({ force: true });
  }else if(option == 'Mobile')
  {
    cy.xpath(this.contact_label_locator).click({ force: true });
      cy.xpath(this.mobile_option).click({ force: true });
  }else
  {
      cy.xpath(this.contact_label_locator).click({ force: true });
      cy.xpath(this.other_option).click({ force: true });
  }
}


}