/// <reference types="Cypress" />

describe("Testing of EA app", () => {

    before("Call for a particular it block", () => {
        cy.visit("http://tst8mfldirect2.mfltest.co.uk/storefront/index.ep");
     //   cy.fixture("eauser").as("user");
    });

    it("Testing EA Site for assertion", () => {
        cy.get("[button gradientPrimary block']", {timeout: 60000}).should(($x) => {
            expect($x).to.have.class("ls-nav-active");
        })

    })
});