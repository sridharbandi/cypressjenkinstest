import homePage from "../pages/home.page";
import FishListPage from "../pages/fishlist.page"
import AngelFishPage from "../pages/angelfish.page"
import CartPage from "../pages/cart.page"
import LoginPage from "../pages/login.page"
import RegisterPage from "../pages/register.page"
import PaymentPage from "../pages/payment.page"
import confirmPage from "../pages/confirm.page"
import OrderPage from "../pages/order.page"

describe('Pet store  checkout', ()=> {
    it('Buying fish from the pet store', ()=>{
        let random = Math.floor(Math.random()*10000)
        let username = 'ptersio'+random
        let email = `paswordsio${random}@gmail.com`

        homePage.openUrl()
        homePage.selectFish()
        FishListPage.selectAngelFish()
        AngelFishPage.addtoCart()
        CartPage.proceedCheckout()
        LoginPage.selectRegister()
        RegisterPage.register(username, email)
        homePage.selectSignIn()
        LoginPage.login()
        homePage.selectCart()
        CartPage.proceedCheckout()
        PaymentPage.makePayment()
        confirmPage.confirm()
        OrderPage.lblMessage.should('contain.text', 'Thank you')
        OrderPage.signOut()
        

    })
})