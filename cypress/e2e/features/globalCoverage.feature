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
    Then I should see the error message "This field is required." for "First Name"

  Scenario: Submit form with empty "First Name" field / TC 13
    Given I open the Global Coverage page
    When I fill out the Global Coverage form without "First Name"
    And I submit the Global Coverage form
    Then I should see the error message "This field is required.S" for "First Name"

  Scenario: Submit form with empty "Last Name" field / TC 14
    Given I open the Global Coverage page
    When I fill out the Global Coverage form without "Last Name"
    And I submit the Global Coverage form
    Then I should see the error message "This field is required.S" for "Last Name"

  Scenario: Submit form with empty "Email" field / TC 15
    Given I open the Global Coverage page
    When I fill out the Global Coverage form without "Email"
    And I submit the Global Coverage form
    Then I should see the error message "Must be valid email. example@yourdomain.Scom" for "Email"
