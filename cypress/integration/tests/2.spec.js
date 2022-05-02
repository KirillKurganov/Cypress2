import { ProductPage } from "../../pageObject/pages/productPage";
import { AllProductsPage } from "../../pageObject/pages";

describe('2 test', () => {
    const first = 0;

     let allProductsPage;
     let productPage;

    before(() => {
        allProductsPage = new AllProductsPage();
        allProductsPage.navigateTo();
        allProductsPage.listOfBooks.product.openTheProductByIndex(first);
        productPage = new ProductPage();
    });

    it('verify the first raw title is correct', () => {
        const expectedResult = 'UPC';
        productPage.productInformationTable.verifyTitleTextByRaw(first, expectedResult);
    });

    it('verify first raw content is correct', () => {
        const expectedResult = 'a897fe39b1053632';
        productPage.productInformationTable.verifyContentByRaw(first, expectedResult);
    });
});