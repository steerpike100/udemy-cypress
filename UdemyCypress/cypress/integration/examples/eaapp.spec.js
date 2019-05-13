/// <reference types="Cypress" />

describe("Testing of EA app", () => {

    before("Call for a particular it block", () => {
        cy.visit("http://www.executeautomation.com/site");
        cy.fixture("eauser").as("user");
    });

    it("Testing EA Site for assertion", () => {
        cy.get("[aria-label='jump to slide 2']", {timeout: 60000}).should(($x) => {
            expect($x).to.have.class("ls-nav-active");
        })
    })
});

it.only("Testing EA Site for assertion with Hooks", () => {
    cy.get("[aria-label='jump to slide 2']", {timeout: 60000}).should(($x) => {
        expect($x).to.have.class("ls-nav-active");
    })

});

it("Performing Benefit check", () => {

    //Shorthand way of working with promise using involve
    cy.get("#loginLink").invoke('text').as("linkText");

    cy.contains("Login").click();

    cy.get("@linkText").then(($x) => {
        expect($x).is.eql('Login');
    })

    cy.url().should("include", "/Account/Login")

    cy.get("@user").then((user) => {
        cy.get('#UserName').type(user.UserName);
        cy.get("#Password").type(user.Password);
    });

    cy.get(".btn").click({force: true});

    //Click Employee List
    cy.contains("Employee List").click();

    //Table
    cy.get('.table').find('tr').contains('Prasanth').parent().contains('Benefits').click();
    cy.get('.table').find('tr').as("rows");

    cy.get("@rows").then(($row) => {
        cy.wrap($row).click({multiple: true})
    });

    // Verify the value from a property
    cy.wrap({name: 'Karthik'}).should('have.property', 'name').and('eq', 'Karthik');

    // Using Wrap
    cy.get('.table').find('tr > td').then(($td) => {
        cy.wrap($td).contains("John").invoke("wrap").parent().contains("Benefits").click();
    })
});