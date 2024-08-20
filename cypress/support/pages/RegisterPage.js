class RegisterPage{
    //WebElementler
constructor(){
    this.kostenlosRegisterGirisButon='.justify-content-center > #btn_login'
    this.vorname='input[name="name"]'
    this.nachname='[name="surname"]'
    this.email='[name="email"]'
    this.passwort='[name="password"]'
    this.jetzKostenlosTestenButon='#btn_register'
    this.bosVornameUyariMessage=':nth-child(1) > .sc-dAlyuH > .sc-dhKdcB'
    this.bosNachnameUyariMessage=':nth-child(2) > .sc-dAlyuH > .sc-dhKdcB'
    

}
//metotlar
clickRegisterGirisButon(){
    cy.get(this.kostenlosRegisterGirisButon).click({force:true});
}
writeRegisterVorname(vorname){
   // cy.get(this.vorname).click({force:true})
    cy.get(this.vorname).type(vorname);
}
writeRegisterNachname(nachname){
    cy.get(this.nachname).type(nachname);
}
writeRegisterEmail(email){
    cy.get(this.email).type(email);
}
writeRegisterPasswort(passwort){
    cy.get(this.passwort).type(passwort);
}
clickRegisterKayitButon(){
    cy.get(this.jetzKostenlosTestenButon).click();
}
verifyBosVornameMessage(bosnamemessage){
    cy.get(this.bosVornameUyariMessage).should('have.to',bosnamemessage)
}
verifyBosNachMessage(bosnachnamemessage){
    cy.get(this.bosNachnameUyariMessage).should('have.to',bosnachnamemessage)
}
}
export const register=new RegisterPage()