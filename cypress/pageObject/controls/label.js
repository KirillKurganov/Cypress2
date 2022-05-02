import { BaseElement } from "../base";

export class Label extends BaseElement {

    constructor(selector) {
        super(selector);
    }

    verifyElementTextIsCorrect(expectedText) {
        cy.get(this.selector).
        then(element => {
            expect(element.text()).to.equal(expectedText);
        });
    }
}