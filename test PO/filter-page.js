export class Filter {
    recherche(produit){
        cy.get('#fi-q').type(produit + '{enter}')
    }
    filtreRemise(){
        cy.contains('article.-phm').scrollIntoView()
        cy.get('._chk').click()
    }
   filtreMarque(marque){
        cy.get('.-df > .-oh').type(marque + "{enter}")
    }
}