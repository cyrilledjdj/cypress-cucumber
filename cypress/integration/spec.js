/// <reference types="cypress" />

describe('The Home Page', () => {
  // before once, access stackblitz
  before(() => {
    cy.visit('/');
    cy.wait(6000);
    cy.get('button').click();
    cy.wait(5000);
  });

  beforeEach(() => {
    // 
  });

  it('Has the expected title', () => {
    cy.title().should('equal', 'Oliver Sacks Book Collection');
  });
});
