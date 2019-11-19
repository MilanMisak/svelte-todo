const baseUrl = 'http://localhost:5000';

describe('App', () => {
    it('should add a todo', () => {
        cy.visit(baseUrl);

        const todo = 'Water Plants';
        cy.get('input').as('input').type(todo);
        cy.get('.add-button').click();

        cy.get('@input').should('have.value', '');
        cy.contains(todo);
    });
});
