import { And, Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('User is getting to the homepage', () => {
  cy.visit('/');
});

Then('User should see a list of tracks', () => {
  cy.get('h1').should('contain.text', 'request');
});

And('page should have a title of Catstronauts', () => {
  cy.title().should('equal', 'request | Cypress Documentation');
});
