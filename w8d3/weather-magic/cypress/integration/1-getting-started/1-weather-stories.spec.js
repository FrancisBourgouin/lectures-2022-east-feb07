/// <reference types="cypress" />

describe("Weather App", () => {
  it("should add a button for a searched city, only if the city exists", () => {
    // Visit the app
    cy.visit("/");
    // Type in the form a city name (valid)
    cy.get(".CityForm input").type("Toronto");

    cy.get(".CityForm button").click();
    // I should see the button
    cy.get(".CityList button").should("have.length", 1);
    // Type in the form a city name that doesn't exist (invalid)
    cy.get(".CityForm input").type("Gjsuvt 'Potato-landia'");
    cy.get(".CityForm button").click();
    // I should not see the button
    cy.get(".CityList button").should("have.length", 1);
  });

  it("should let the user search for a city, and show the up to date weather", () => {
    // Visit the app
    cy.visit("/");
    // Check if current Weather is not there
    cy.get(".CurrentWeather").should("not.exist");
    // Find the input, type a valid city in it, click
    cy.get(".CityForm input").type("Toronto");

    cy.get(".CityForm button").click();
    // Should see a section called current weather
    cy.get(".CurrentWeather").should("exist");
    // Should have the city name in it
    // cy.get(".CurrentWeather h1").should("", "Toronto");
    cy.get(".CurrentWeather").contains("Toronto").should("exist");
  });
  it("should let the user click on a previously searched city and view the weather", () => {
    // Visit the app
    cy.visit("/");
    // Find the input type city 1 and enter
    cy.get(".CityForm input").type("Toronto {enter}");
    // Find the input type city 2 and enter
    cy.get(".CityForm input").type("Ottawa {enter}");
    // Click on the city 1 button and I should see the weather for that city
    cy.get(".CityList").contains("Toronto").click();

    cy.get(".CurrentWeather").contains("Toronto").should("exist");
  });
});
