it('should be able to ', () => {
  cy.visit('https://www.jumia.com.tn/')
   //fermer la fenêtre POP-UP
  cy.get('.cls > .ic').click()
  cy.wait(2000)
  //cliquer sur se connecter
  cy.get(':nth-child(1) > .trig').click()
  cy.wait(2000)
  cy.get('#dpdw-login-box > .inbox > .-pam > .btn').click()
  //entrer adresse email
  cy.get('.mdc-text-field__input').type("ines.masmoudi@talan.com")
  cy.get(':nth-child(3) > :nth-child(1) > .mdc-button > .mdc-button__touch').click()
  //entrer mot de passe
  cy.get('.mdc-text-field__input').type("azerty00")
  cy.get('#loginButton > .mdc-button__touch').click()
  cy.wait(2000)
   //paiement commande
  cy.get('.col > .-gy8').click()
  cy.get('article.card > .-fs0.-pas > .btn').click()//commander
  cy.get('#osh-opc-btn-save').click()//continuer
  cy.get('.list > :nth-child(2) > .-fwm').click()//paiement cash
  cy.get('.-primary').click()//valider paiement
})
