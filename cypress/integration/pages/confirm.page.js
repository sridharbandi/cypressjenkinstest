class ConfirmPage {
    get btnConfirm() { return cy.contains('Confirm') }
    confirm() {
        this.btnConfirm.click()
    }
}
export default new ConfirmPage()