describe("Personal Website Page", () => {
  it("Visits personal website age", () => {
    cy.visit("/");
    cy.contains("Personal website").click();
    cy.url().should("include", "/personal-website");
  });
});
