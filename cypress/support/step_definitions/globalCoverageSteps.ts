import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { faker } from '@faker-js/faker';
import GlobalCoveragePage from '../../pages/GlobalCoveragePage';

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const email = faker.internet.email();

Given('I open the Global Coverage page', () => {
  cy.visit('/global-coverage');
});

When('I fill out the Global Coverage form with valid data', () => {
  GlobalCoveragePage.typeFirstName(firstName);
  GlobalCoveragePage.typeLastName(lastName);
  GlobalCoveragePage.typeCompanyEmail(email);
});

When('I fill out the Global Coverage form without {string}', (missingField: string) => {
  if (missingField !== 'First Name') {
    GlobalCoveragePage.typeFirstName(firstName);
  }
  if (missingField !== 'Last Name') {
    GlobalCoveragePage.typeLastName(lastName);
  }
  if (missingField !== 'Email') {
    GlobalCoveragePage.typeCompanyEmail(email);
  }
});

When('I check the "Receive marketing emails" checkbox', () => {
  GlobalCoveragePage.toggleReceiveEmailsCheckbox(true);
});

When('I uncheck the "Receive marketing emails" checkbox', () => {
  GlobalCoveragePage.toggleReceiveEmailsCheckbox(false);
});

When('I submit the Global Coverage form', () => {
  GlobalCoveragePage.clickSubmitButton();
});

Then('I should see the success message {string} for Global Coverage form', (expectedMessage: string) => {
  cy.contains(expectedMessage).should('be.visible');
});

Then('I should see the error message {string} for {string}', (expectedMessage: string, field: string) => {
  cy.contains(expectedMessage).should('be.visible');
});
