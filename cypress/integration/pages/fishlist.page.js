class FishListPage{

    get angelfish() {return cy.get('tbody > :nth-child(2) > :nth-child(1) > a')}

    selectAngelFish(){
        this.angelfish.click()
    }
}

export default new FishListPage()