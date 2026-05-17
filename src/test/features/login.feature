
Feature: User Authentication tests

  Background: 
    Given user is on the login page


  Scenario: Login should be success
    Given User enter the username as "balamurthy11"
    Given User enter the password as "Balamurthy1234"
    When User click on the login button
    Then Login should be success

  
  Scenario: Login should not be success
    Given User enter the username as "wronguser"
    Given User enter the password as "wrongpass"
    When User click on the login button
    Then Login should fail
