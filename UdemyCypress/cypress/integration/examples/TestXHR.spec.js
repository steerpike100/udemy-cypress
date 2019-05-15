/// <reference types="Cypress"/>

describe("Test LambdaTest Website XHR", () => {

    before("Navigate to LambdaTest", () => {
        cy.visit("https://accounts.lambdatest.com/login")
    });

    it("Perform login and verify XHR", () => {

        cy.fixture("lambdaUser").as("lambdauser)");

        cy.get("@user").then((lambdauser) => {
            cy.get("[name='email]").debug().type(user.UserName);
            cy.get("[name='password']").debug().type("user.Password", { log: false });

        });

        cy.get("[class='btn btn-primary btn-lg btn-block mt3]").click();

    })
});