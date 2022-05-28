class AngelFishPage {

    get angellargefish() {return cy.get(':nth-child(2) > :nth-child(5) > .Button')}

    addtoCart(){
        this.angellargefish.click()
    }
}

export default new AngelFishPage()