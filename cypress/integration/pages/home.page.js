class HomePage{

    get iconFish() {return cy.get("img[src='../images/fish_icon.gif']")}
    get lnkSignIn() {return cy.get('[href="/actions/Account.action?signonForm="]')}
    get lnkCart() {return cy.get('[href="/actions/Cart.action?viewCart="] > img')}

    openUrl(){
        cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
    }

    selectFish(){
        this.iconFish.click()
    }

    selectSignIn(){
        this.lnkSignIn.click()
    }

    selectCart(){
        this.lnkCart.click()
    }

}

export default new HomePage()