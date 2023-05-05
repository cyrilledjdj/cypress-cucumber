/// <reference types="cypress" />

describe('The Home Page', () => {
  // before once, access stackblitz
  beforeEach(() => {
    cy.visit('/');
  });

  it('Has the expected title', () => {
    cy.title().should('equal', 'request | Cypress Documentation');
  });

  it('Has visible tracks', () => {
    cy.get('h1').should('contain.text', 'request');
  });
});
