Feature: Contact Us Page

  Scenario: Talk to an expert with valid data / TC 1
    Given I open the Contact Us page
    When I fill out the Contact Us form with valid data
    And I check the "I want to receive marketing emails" checkbox
    And I submit the Contact Us form
    Then I should see the success message "Thank you." for Contact Us form

  Scenario: Talk to an expert with empty fields / TC 2
    Given I open the Contact Us page
    When I submit the Contact Us form
    Then I should see the error message "This field is required." for "First Name" on Contact Us form

  Scenario Outline: Validation for missing fields in Contact Us form / TC 3 - 9
    Given I open the Contact Us page
    When I fill out the Contact Us form without "<MissingField>"
    And I check the "I want to receive marketing emails" checkbox
    And I submit the Contact Us form
    Then I should see the error message "<ExpectedErrorMessage>" for "<MissingField>" on Contact Us form

    Examples:
      | MissingField               | ExpectedErrorMessage                                   |
      | First Name                 | This field is required.                               |
      | Last Name                  | This field is required.                               |
      | Business email             | Must be valid email. example@yourdomain.com          |
      | Phone number               | Thank you.                                           |
      | Company website            | This field is required.                               |
      | Please describe your request | This field is required.                              |
      | How did you hear about Telnyx? | This field is required.                             |

  Scenario: Talk to an expert with unchecked "I want to receive marketing emails" checkbox / TC 10
    Given I open the Contact Us page
    When I fill out the Contact Us form with valid data
    And I uncheck the "I want to receive marketing emails" checkbox
    And I submit the Contact Us form
    Then I should see the success message "Thank you." for Contact Us form
