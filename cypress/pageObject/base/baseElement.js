export class BaseElement {

    constructor(selector) {
        this.selector = selector;
    }

    getCurrentElement() {
        return cy.get(this.selector);
    }

    click() {
        cy.get(this.selector).click();
    }

    shouldBeVisible() {
        cy.get(this.selector).should('be.visible');
    }

    hover() {
        cy.get(this.selector).invoke('show');
    }
}