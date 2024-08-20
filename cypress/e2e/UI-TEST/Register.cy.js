import { register } from "../../support/pages/RegisterPage";
import { faker } from "@faker-js/faker";



describe('Erfolgreiche Anmeldung-Positive', () => {
    let registerData
    let fakeEmail
    let fakePasswort
    before(()=>{
        cy.fixture('register_data').then((data)=>{
            registerData=data
            fakeEmail=faker.internet.email()
            fakePasswort=faker.internet.password()
        })
    });
    beforeEach(() => {
        cy.wait(2000)
    //cy.visit('/')
       cy.visit('/' + Cypress.env('register'));
     
        
    });
        it.only('Register Positive Test', () => {
            cy.on('uncaught:exception', (err, runnable) => {
                return false
              })
    
          
           register.writeRegisterVorname(registerData.Vorname)
           register.writeRegisterNachname(registerData.Nachname)
           register.writeRegisterEmail(fakeEmail)
           register.writeRegisterPasswort(fakePasswort)
           register.clickRegisterKayitButon()
       
        })
        it('Register Negative Test-Name alani bos', () => {
            
            // register.writeRegisterVorname(registerData.Bosvorname)
             register.writeRegisterNachname(registerData.Nachname)
             register.writeRegisterEmail(fakeEmail)
             register.writeRegisterPasswort(fakePasswort)
             register.clickRegisterKayitButon()
             register.verifyBosVornameMessage(registerData.BosVornameUyarimesaji)
             
          });
          it('Register Positive Test-Nachname alani bos', () => {
          
            register.writeRegisterVorname(registerData.Vorname)
            //register.writeRegisterNachname(registerData.Nachname)
            register.writeRegisterEmail(fakeEmail)
            register.writeRegisterPasswort(fakePasswort)
            register.clickRegisterKayitButon()
            register.verifyBosNachMessage(registerData.BosNachnameUyarimesaji)
        
         });
            
        })
