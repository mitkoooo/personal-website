describe("Stock Exchange Simulator Page", () => {
  it("Visits stock exchange simulator page", () => {
    cy.visit("/");
    cy.contains("Stock Exchange Simulator").click();
    cy.url().should("include", "/stock-exchange-sim");
  });
});
