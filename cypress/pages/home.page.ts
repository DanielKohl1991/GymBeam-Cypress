export class HomePage {
  private static readonly cookiesConfirm = `[id="CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll"]`;
  private static readonly mainLogoSel = `div.header a.logo`;
  private static readonly categorySel = `[id="widget-homepage-categories"] a`;
  private static readonly productSel = `ol.product-items li`;

  static confirmCookies(): void {
    cy.get(this.cookiesConfirm).should('exist').click();
  }

  static selectCategoryByNum(num: number): void {
    cy.get(`${this.categorySel}:nth-child(${num}) `).click();
  }

  static selectProductByNum(num: number): Cypress.Chainable {
    return cy.get(`${this.productSel}:nth-child(${num}) a.product-item-link`);
  }

  static goToHomePage(): void {
    cy.get(this.mainLogoSel).click();
  }

  static assertFirstProduct(capturedText: string): void {
    this.selectProductByNum(1).should('have.text', capturedText);
  }
}
