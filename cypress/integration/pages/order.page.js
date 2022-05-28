class OrderPage{
    get lblMessage(){return cy.contains('Thank you, your order has been submitted.')}
get lnkSignOut(){return cy.contains('Sign Out')}
signOut(){
    this.lnkSignOut.click()
}
}
export default new OrderPage()

