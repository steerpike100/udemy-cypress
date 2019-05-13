/// <reference types="Cypress" />

describe ("Testing of EA app", () =>{
    it("Login application", () =>{
        cy.visit("http://tst8mfldirect2.mfltest.co.uk/storefront/index.ep")

            .then(($selectedElement) =>{

                debugger
        })

        cy.contains("#j_username");

        cy.get("#j_password").click();
    })
});