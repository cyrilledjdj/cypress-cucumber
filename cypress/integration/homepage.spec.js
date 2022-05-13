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
    cy.get('ng-lift-off-tracks').should('be.visible');
  });
});
