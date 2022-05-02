import { AllProductsPage } from "../../pageObject/pages";

describe('1 test',() => {
    let allProductsPage;

    before(() => {
        allProductsPage = new AllProductsPage();
        allProductsPage.navigateTo();
    });

    it('verify the url is correct', () => {
        const expectedUrl = `${Cypress.env('BASE_URL')}/`;
        allProductsPage.verifyUrlIsCorrect(expectedUrl);
    });

    it('verify the title is displayed on the page', () => {
        allProductsPage.title.shouldBeVisible();
    });

    it('verify the title is correct', () => {
        const expectedResult = 'All products';
        allProductsPage.title.verifyElementTextIsCorrect(expectedResult);
    });

    it('verify warning message is displayed on the page', () => {
        allProductsPage.warningMessage.shouldBeVisible();
    });

    it('verify warning message is correct', () => {
        const expectedResult = `Warning! This is a demo website for web scraping purposes. Prices and ratings here were \
randomly assigned and have no real meaning.`;
        allProductsPage.warningMessage.verifyElementTextIsCorrect(expectedResult);
    });

    it('verify the first item image is displayed', () => {
        const first = 0;
        const element = 'image';
        allProductsPage.listOfBooks.product.elementByIndexShouldBeVisible(element, first);
    });

    it('verify the tenth item button is displayed', () => {
        const tenth = 9;
        const element = 'addToBasketButton';
        allProductsPage.listOfBooks.product.elementByIndexShouldBeVisible(element, tenth);
    });

    it('verify the home link contains correct value', () => {
        const expectedResult = `${Cypress.env('BASE_URL')}/index.html`;
        allProductsPage.homeLink.verifyUrlIsCorrect(expectedResult);
    });
});

