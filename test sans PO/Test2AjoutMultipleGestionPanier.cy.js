it('should be able to ', () => {
  cy.visit('https://www.jumia.com.tn/')
  //Fermer la fenêtre POP-UP
 cy.get('.cls > .ic').click()
 cy.wait(2000)
 //Se connecter
 cy.get(':nth-child(1) > .trig').click()
 cy.get('#dpdw-login-box > .inbox > .-pam > .btn').click()
 cy.wait(2000)
 //Entrer adresse email
 cy.get('.mdc-text-field__input').type("ines.masmoudi@talan.com")
 cy.get(':nth-child(3) > :nth-child(1) > .mdc-button > .mdc-button__touch').click()
 //Entrer mot de passe
 cy.get('.mdc-text-field__input').type("azerty00")
 cy.get('#loginButton > .mdc-button__touch').click()
 cy.wait(2000)
   //cliquer sur le 1er produit
  cy.get(':nth-child(8) > .card > .crs-w > .crs > :nth-child(1) > .prd > .core > .img').click()
  cy.wait(2000)
  //cliquer sur j'achète
  cy.get('#add-to-cart > .add > .ic > use').as('Product1Btn')
  cy.get('@Product1Btn').click({ force: true })
  cy.wait(3000)
  //retour vers page d'acceuil
  cy.get('.header > .row > .col3 > .-df > .ic').as('jumiaBtn')
  cy.get('@jumiaBtn').click({ force: true })
  cy.wait(2000)
  //cliquer sur le 2ème produit
  cy.get(':nth-child(4) > .card > .crs-w > .crs > :nth-child(2) > .prd > .core > .img').click()
  cy.wait(2000)
  //cliquer sur j'achète
  cy.get('#add-to-cart > .add').as('Product2Btn')
  cy.get('@Product2Btn').click({ force: true })
  cy.wait(3000)
  //Déplacer un produit du panier aux favoris
  cy.get('.col > .-gy8').click()
  cy.get(':nth-child(3) > .bt > ._def').as('SupBtn')
  cy.get('@SupBtn').click({ force: true })
  cy.get('.-mrm > .btn').as('RetirerBtn')
  cy.get('@RetirerBtn').click({ force: true })
  cy.wait(3000)
  //augmenter la quantité d'un produit
  cy.get(':nth-child(2) > .bt > .-df > [aria-label="augmenter la quantité panier"]').as('augBtn')
  cy.get('@augBtn').click({ force: true })
  cy.wait(3000)
  //diminuer la quantité d'un produit
    cy.get(':nth-child(3) > .bt > .-df > [aria-label="diminuer la quantité panier"]').as('dimBtn')
    cy.get('@dimBtn').click({ force: true })
    cy.wait(3000)
  //Se déconnexion
 cy.get('.col > :nth-child(1) > .trig').click()
 cy.get('#dpdw-login-box > .inbox > .-tac > .btn').click()
  })