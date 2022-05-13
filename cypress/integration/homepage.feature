Feature: Homepage

  Scenario: View the homepage

    Given User is getting to the homepage
    Then User should see a list of tracks
    And page should have a title of Catstronauts

