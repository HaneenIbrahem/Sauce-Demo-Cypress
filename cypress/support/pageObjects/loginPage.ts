export default class LoginPage {
  elements = {
    userName: () => cy.get("#user-name"),
    password: () => cy.get("#password"),
    loginButton: () => cy.get("#login-button"),
  };
  login(userName: string, password: string) {
    this.elements.userName().type(userName);
    this.elements.password().type(password);
    this.elements.loginButton().click();
  }
}
