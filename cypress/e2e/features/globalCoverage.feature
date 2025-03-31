Feature: Global Coverage Page Form

  Scenario: Submit form with valid data / TC 11
    Given I open the Global Coverage page
    When I fill out the Global Coverage form with valid data
    And I check the "Receive marketing emails" checkbox
    And I submit the Global Coverage form
    Then I should see the success message "Thank you." for Global Coverage form

  Scenario: Submit form with empty fields / TC 12
    Given I open the Global Coverage page
    When I submit the Global Coverage form
    Then I should see the error message "This field is required." for "First Name" on Global Coverage form

  Scenario Outline: Validation for missing fields in Global Coverage form / TC 13 - 15
    Given I open the Global Coverage page
    When I fill out the Global Coverage form without "<MissingField>"
    And I submit the Global Coverage form
    Then I should see the error message "<ExpectedErrorMessage>" for "<MissingField>" on Global Coverage form

    Examples:
      | MissingField | ExpectedErrorMessage                        |
      | First Name   | This field is required.                     |
      | Last Name    | This field is required.                     |
      | Email        | Must be valid email. example@yourdomain.com |
