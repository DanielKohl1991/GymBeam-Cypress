export class ProductPage {
  private static readonly productNameSel = `[data-ui-id="page-title-wrapper"]`;

  static getProductName(): Cypress.Chainable {
    return cy.get(this.productNameSel).invoke('text');
  }
}
