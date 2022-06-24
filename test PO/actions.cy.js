import {Connexion} from "../page-objects/connexion-page"
import {Filter} from "../page-objects/filter-page"
import {Ajout} from "../page-objects/ajout-page"

describe('jumia actions',() => {
    const connexion = new Connexion
    const filter = new Filter
    const ajout = new Ajout
it('should open website', () => {
        connexion.navigate()
})
it('should close popup', () => {
    connexion.closePopup()
})
it('should click submit', () => {
    connexion.clickSubmit1()
})
it('should click submit', () => {
    connexion.clickSubmit2()
})
it('should enter user email', () => {
    connexion.addEmail('ines.masmoudi@talan.com')
})
it('should click continu', () => {
    connexion.clickContinu()
})   
it('should enter user password', () => {
    connexion.addEmail('azerty00')
})
it('should click submit', () => {
    connexion.clickSubmit3()
})
it('should enter nom produit', () => {
    filter.recherche('écran')
})
it('should close popup', () => {
    connexion.closePopup()
})
it('should select pourcentage remise', () => {
    filter.filtreRemise()
})
it('should enter ', () => {
   filter.filtreMarque('Arvea')
})
it('should select product', () => {
    ajout.selectProduct()
})
it('should close popup', () => {
    connexion.closePopup()
})
it('should ajouter produit', () => {
    ajout.ajout()
})

})