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
    Then I should see the error message "This field is required." for "First Name"

  Scenario: Talk to an expert with empty "First Name" field / TC 3
    Given I open the Contact Us page
    When I fill out the Contact Us form without "First Name"
    And I check the "I want to receive marketing emails" checkbox
    And I submit the Contact Us form
    Then I should see the error message "This field is required." for "First Name"

  Scenario: Talk to an expert with empty "Last Name" field / TC 4
    Given I open the Contact Us page
    When I fill out the Contact Us form without "Last Name"
    And I check the "I want to receive marketing emails" checkbox
    And I submit the Contact Us form
    Then I should see the error message "This field is required." for "Last Name"

  Scenario: Talk to an expert with empty "Business email" field / TC 5
    Given I open the Contact Us page
    When I fill out the Contact Us form without "Business email"
    And I check the "I want to receive marketing emails" checkbox
    And I submit the Contact Us form
    Then I should see the error message "Must be valid email. example@yourdomain.com" for "Business email"

  Scenario: Talk to an expert with empty "Phone number" field / TC 6
    Given I open the Contact Us page
    When I fill out the Contact Us form without "Phone number"
    And I check the "I want to receive marketing emails" checkbox
    And I submit the Contact Us form
    Then I should see the success message "Thank you." for Contact Us form

  Scenario: Talk to an expert with empty "Company website" field / TC 7
    Given I open the Contact Us page
    When I fill out the Contact Us form without "Company website"
    And I check the "I want to receive marketing emails" checkbox
    And I submit the Contact Us form
    Then I should see the error message "This field is required." for "Company website"

  Scenario: Talk to an expert with empty "Please describe your request" field / TC 8
    Given I open the Contact Us page
    When I fill out the Contact Us form without "Please describe your request"
    And I check the "I want to receive marketing emails" checkbox
    And I submit the Contact Us form
    Then I should see the error message "This field is required." for "Additional Information"

  Scenario: Talk to an expert with empty "How did you hear about Telnyx?" field / TC 9
    Given I open the Contact Us page
    When I fill out the Contact Us form without "How did you hear about Telnyx?"
    And I check the "I want to receive marketing emails" checkbox
    And I submit the Contact Us form
    Then I should see the error message "This field is required." for "How Did You Hear"

  Scenario: Talk to an expert with unchecked "I want to receive marketing emails" checkbox / TC 10
    Given I open the Contact Us page
    When I fill out the Contact Us form with valid data
    And I uncheck the "I want to receive marketing emails" checkbox
    And I submit the Contact Us form
    Then I should see the success message "Thank you." for Contact Us form
