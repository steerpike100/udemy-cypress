/// <reference types="Cypress" />

context("Testing of lambdatest website", () => {

    beforeEach(() => {
        cy.visit('https://accounts.lambdatest.com')
    });

    it('Login to LambdaTest', () => {
            cy.get("[name='email]").debug().type(Cypress.env('USERNAME'));
            cy.get("[name='password']").debug().type(Cypress.env()('PASSWORD', {log: false}));
        });
    });
