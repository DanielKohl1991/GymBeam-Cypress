export class CategoryPage {
  private static readonly productSel = `ol.products.product-items li`;

  static selectProductByNum(num: number): void {
    cy.get(`${this.productSel}:nth-child(${num})`).click();
  }
}
