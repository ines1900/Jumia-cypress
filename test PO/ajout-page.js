export class Ajout {
   
    selectProduct(){
        cy.get(':nth-child(1) > .core > .img-c > .img').click()
        cy.wait(2000)
    }
    ajout(){
        cy.get('#add-to-cart > .add').as('ProductBtn')
        cy.get('@ProductBtn').click({ force: true })
 }
}