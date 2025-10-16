describe("The Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should have working navigation links", () => {
    cy.visit("/");

    const linkComponents: Array<string> = ["nav", "[id=projects]", "footer"];

    linkComponents.forEach((component) => {
      cy.get(`${component} a`).each(($link) => {
        cy.wrap($link).should("have.attr", "href").and("not.be.empty");
      });
    });
  });
});
