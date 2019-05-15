/// <reference types="Cypress" />

describe("Testing of EA app", () => {

    before("Login to application", () => {
        cy.visit('http://www.eaapp.somee.com');
        cy.fixture("eauser").as("user");

        cy.get("@user").then((user) => {
            cy.login(user.UserName, user.Password);
        })

    });

    it("Performing Benefit check", () => {

        //Click Employee List
        cy.contains("Employee List").click();

        //Table
        cy.get('.table').find('tr').contains('Prashanth', {timeout: 60000}).parent().contains('Benefits').click();

        cy.get('.table').find('tr').as("rows");

        cy.get("@rows").then(($row) => {
            cy.wrap($row).click({multiple: true})
        });

        // Verify the value from a property
        cy.wrap({name: 'Karthik'}).should('have.property', 'name').and('eq', 'Karthik')
    })
});