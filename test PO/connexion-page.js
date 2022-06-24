export class Connexion {
    navigate () {
        cy.visit('https://www.jumia.com.tn/')
    }
    closePopup(){
        cy.get('.cls > .ic').click()
    }
    clickSubmit1(){
        cy.get(':nth-child(1) > .trig').click()
    }
    clickSubmit2(){
        cy.get('#dpdw-login-box > .inbox > .-pam > .btn').click()
    }
    addEmail(mail){
        cy.get('.mdc-text-field__input').type(mail)
    }

    clickContinu(){
        cy.get(':nth-child(3) > :nth-child(1) > .mdc-button > .mdc-button__touch').as('SupBtn')
        cy.get('@SupBtn').click({ force: true })
    }
    addPassword(password){
        cy.get('.mdc-text-field__input').type(password)
    }
    clickSubmit3(){
        cy.get('#loginButton > .mdc-button__touch').click()
        cy.wait(2000)
}
}