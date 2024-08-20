// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('xpath', (selector, ...args) => {
    return cy.get(`xpath=${selector}`, ...args);
});



// token uretmek icin gerekli olan metot
Cypress.Commands.add('generateToken', (username, password) => {
    const body ={
        username : username,
        password:password
    };
    cy.request({
        method: "POST",
        url: "https://managementonschools.com/app/auth/login",
        body: body,
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        return response.body.token;
      });
      
  // Guest User POST REQUEST ICIN REUSABLE BIR METOT OLUSTURALIM
Cypress.Commands.add("addGuest", (token, guestData) => {
  cy.request({
    method: "POST",//creating new data
    url: "https://managementonschools.com/app/guestUser/register",
    headers: {
      Authorization: `${token}`, // Assuming your API uses Bearer token authentication
      "Content-Type": "application/json",
    },
    body: guestData,
  });});
// Add Admin POST REQUEST ICIN REUSABLE BIR METOT OLUSTURALIM
Cypress.Commands.add("addAdmin", (token, addAdminData) => {
  cy.request({
    method: "POST",//creating new data
    url: "https://managementonschools.com/app/admin/save",
    headers: {
      Authorization: `${token}`, // Assuming your API uses Bearer token authentication
      "Content-Type": "application/json",
    },
    body: addAdminData,
  })
  });

//Add Vicedean (Dean ekler) POST REQUEST icin bir resable metot olusturalim.

Cypress.Commands.add("addVicedean", (token, addVicedeanData) => {
  cy.request({
    method: "POST",//creating new data
    url: "https://managementonschools.com/app/vicedean/save",
    headers: {
      Authorization: `${token}`, // Assuming your API uses Bearer token authentication
      "Content-Type": "application/json",
    },
    body: addVicedeanData,
  })
  });

    });
    
  

