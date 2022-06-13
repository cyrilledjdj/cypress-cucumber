import { And, Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('User is getting to the homepage', () => {
  cy.visit('/');
});

Then('User should see a list of tracks', () => {
  cy.get('a').contains('have.text', 'Catstronauts').should('be.visible');
});

And('page should have a title of Catstronauts', () => {
  cy.title().should('equal', 'Catstronauts');
});
