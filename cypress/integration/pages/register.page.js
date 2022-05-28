class RegisterPage{
    get txtUser(){return cy.get('input[name="username"]')}
    get txtPassword(){return cy.get('input[name="password"]')}
    get txtReppassword(){return cy.get('input[name="repeatedPassword"]')}
    get txtFirstName(){return cy.get('input[name="account.firstName"]')}
    get txtLastName(){return cy.get('input[name="account.lastName"]')}
    get txtEmail(){return cy.get('input[name="account.email"]')}
    get txtPhone(){return cy.get('input[name="account.phone"]')}
    get txtAdd1(){return cy.get('input[name="account.address1"]')}
    get txtAdd2(){return cy.get('input[name="account.address2"]')}
    get txtCity(){return cy.get('input[name="account.city"]')}
    get txtState(){return cy.get('input[name="account.state"]')}
    get txtPostal(){return cy.get('input[name="account.zip"]')}
    get txtCountry(){return cy.get('input[name="account.country"]')}
    get drpCategory(){return cy.get('select[name="account.favouriteCategoryId"]')}
    get chklist(){return cy.get('input[name="account.listOption"]')}
    get chkBanner(){return cy.get('input[name="account.bannerOption"]')}
    get btnSqve(){return cy.contains('Save Account Information')}

    register(username, email){

        
        this.txtUser.type(username)
        this.txtPassword.type('password')
        this.txtReppassword.type('password')
        this.txtFirstName.type('James')
        this.txtLastName.type('Vasanth')
        this.txtEmail.type(email)
        this.txtPhone.type('786876876')
        this.txtAdd1.type('Address road')
        this.txtAdd2.type('Sec Address road')
        this.txtCity.type('StEST CITY')
        this.txtState.type('Test state')
        this.txtPostal.type('23423')
        this.txtCountry.type('India')
        this.drpCategory.select('DOGS')
        this.chklist.check()
        this.chkBanner.check()
        this.btnSqve.click()
    }
}

export default new RegisterPage()