describe('Cypress Testing', () => {
    it('Should navigate to specific url', function () {
        cy.visit('https://example.cypress.io/');
        cy.contains('get').click();
        cy.get()
    });
    it('First fruit is apples', function () {
        cy.get('.first').scrollIntoView().contain("apples");
        cy.get('.second').contain("oranges");
        cy.get('.third').contain("bananas");
        cy.get('.fourth').contain("more apples");
    });
});