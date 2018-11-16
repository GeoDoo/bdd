Feature: Homemade Cherry Pie
  In order to eat a nice dessert
  As a cook
  I want to be able to make a cherry pie

  Scenario: make the pie crust
    Given I put the following ingredients inside the mixer
      | ingredient                         | amount |
      | all-purpose flour                  | 315g   |
      | salt                               | 15g    |
      | unsalted butter, chilled and cubed | 90g    |
      | vegetable shortening, chilled      | 150g   |
      | ice water                          | 120ml  |
    When start mixing them for 5 minutes
    Then I obtain a "nice and creamy dough"