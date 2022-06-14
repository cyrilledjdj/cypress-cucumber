/// <reference types="cypress" />

describe('The Home Page', () => {
  // before once, access stackblitz
  before(() => {
    cy.visit('/');
  });

  it('Has the expected title', () => {
    cy.title().should('equal', 'Catstronauts');
  });

  it('Has visible tracks', () => {
    cy.get('a h3').should('contain.text', 'Catstronauts');
  });
});
