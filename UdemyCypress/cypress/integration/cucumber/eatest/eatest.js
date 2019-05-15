import {Given, And, Then} from "cypress-cucumber-preprocessor/steps"

Given(`I visit the EA Site`, () => {
    cy.visit('http://www.eaapp.somee.com');
})

Given(`I click login link`, () => {
    cy.contains("Login").click();
})

Given(`I login as a user with {string} and {string}`, (userName, password) => {
    cy.get('#UserName').type(Cypress.env("username"));
    cy.get('#Password').type(Cypress.env("password"));
    cy.get('.btn').click();
});