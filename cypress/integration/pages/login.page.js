class LoginPage{

    get lnkRegister() {return cy.get('#Catalog > a')}
    get txtpassword() {return cy.get('[name="password"]')}
    get btnSignIn() {return cy.get('[name="signon"]')}

    selectRegister(){
        this.lnkRegister.click()
    }

    login(){
        this.txtpassword.clear().type('password')
        this.btnSignIn.click()
    }

}

export default new LoginPage()