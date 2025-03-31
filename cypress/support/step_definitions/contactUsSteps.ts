import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ContactUsPage from '../../pages/ContactUsPage';
import { faker } from '@faker-js/faker';

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const email = faker.internet.email();
const phoneNumber = faker.string.numeric(8);
const website = faker.internet.url();
const additionalInfo = faker.lorem.sentence();

Given('I open the Contact Us page', () => {
  cy.visit('/contact-us');
});

When('I fill out the Contact Us form with valid data', () => {
  ContactUsPage.selectReasonForContact('Support');
  ContactUsPage.typeFirstName(firstName);
  ContactUsPage.typeLastName(lastName);
  ContactUsPage.typeEmail(email);
  ContactUsPage.selectCountry('Ukraine (+380)');
  ContactUsPage.typePhoneNumber(phoneNumber);
  ContactUsPage.typeWebsite(website);
  ContactUsPage.typeHowDidYouHear('Online search');
  ContactUsPage.typeAdditionalInfo(additionalInfo);
});

When('I fill out the Contact Us form without {string}', (missingField: string) => {
  ContactUsPage.selectReasonForContact('Support');

  if (missingField !== 'First Name') {
    ContactUsPage.typeFirstName(firstName);
  }
  if (missingField !== 'Last Name') {
    ContactUsPage.typeLastName(lastName);
  }
  if (missingField !== 'Business email') {
    ContactUsPage.typeEmail(email);
  }
  if (missingField !== 'Phone number') {
    ContactUsPage.typePhoneNumber(phoneNumber);
  }
  if (missingField !== 'Company website') {
    ContactUsPage.typeWebsite(website);
  }
  if (missingField !== 'Please describe your request') {
    ContactUsPage.typeAdditionalInfo(additionalInfo);
  }
  if (missingField !== 'How did you hear about Telnyx?') {
    ContactUsPage.typeHowDidYouHear('Online search');
  }
});

When('I check the "I want to receive marketing emails" checkbox', () => {
  ContactUsPage.toggleMarketingEmailsCheckbox(true);
});

When('I uncheck the "I want to receive marketing emails" checkbox', () => {
  ContactUsPage.toggleMarketingEmailsCheckbox(false);
});

When('I submit the Contact Us form', () => {
  ContactUsPage.clickSubmitBtn();
});

Then('I should see the success message {string} for Contact Us form', (expectedMessage: string) => {
  cy.contains(expectedMessage).should('be.visible');
});

Then('I should see the error message {string} for {string} on Contact Us form', (expectedMessage: string, field: string) => {
  cy.contains(expectedMessage).should('be.visible');
});
