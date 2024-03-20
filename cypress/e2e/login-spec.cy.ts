describe("login to the system", () => {
  beforeEach(() => {});
  it("log in", () => {
    cy.login('standard_user','secret_sauce')
  });
});
