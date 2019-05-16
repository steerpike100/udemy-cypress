/// <reference types="Cypress"/>

describe("Test LambdaTest Website XHR", () => {

    beforeEach("Navigate to LambdaTest", () => {
        cy.visit("https://accounts.lambdatest.com/login")
    });

    it("Perform login and verify XHR", () => {

        cy.fixture("lambdaUser").as("lambdauser)");

        cy.get("lambdauser").then((lambdauser) => {
            cy.get("[name='email]").debug().type(lambdauser.UserName);
            cy.get("[name='password']").debug().type(lambdauser.Password, { log: false });
        });

        cy.get("[class='btn btn-primary btn-lg btn-block mt3]").click();
    })
});