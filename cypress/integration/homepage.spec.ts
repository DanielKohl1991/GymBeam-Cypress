import { HomePage } from '../pages/home.page';
import { CategoryPage } from '../pages/category.page';
import { ProductPage } from '../pages/product.page';
import { RandInt } from '../support/utils';

describe('Home page', () => {
  const url = 'https://gymbeam.sk/';

  beforeEach(() => {
    cy.viewport(2560, 1440);
    cy.visit(url);
    HomePage.confirmCookies();
  });

  it('should show last visited product on first position on homepage', () => {
    // Added random category and product select, so every test is unique
    HomePage.selectCategoryByNum(RandInt.randCategory());
    CategoryPage.selectProductByNum(RandInt.randProduct());

    ProductPage.getProductName().then((text) => {
      HomePage.goToHomePage();
      HomePage.assertFirstProduct(text);
    });
  });
});
