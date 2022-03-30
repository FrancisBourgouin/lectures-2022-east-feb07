/// <reference types="cypress" />

describe("Search something on google", () => {
  beforeEach(() => {
    cy.visit("https://google.com");
  });

  it("Should show the word wormhole if we search for einstein-rosen bridges", () => {
    cy.get(".gLFyf").type("Einstein-Rosen Bridges {enter}");

    cy.get(".g > .jtfYYd > .jGGQ5e > .yuRUbf > a > .LC20lb").should(
      "have.text",
      "Wormhole - Wikipedia"
    );
  });
});
