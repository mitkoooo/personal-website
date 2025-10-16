describe("About page", () => {
  it("Visits About page", () => {
    cy.visit("/");
    cy.contains("About").click();
    cy.url().should("include", "/about");
  });
});
