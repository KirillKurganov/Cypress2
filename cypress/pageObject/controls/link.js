import { BaseElement } from "../base";

export class Link extends BaseElement {

    constructor(selector) {
        super(selector);
    }

    verifyUrlIsCorrect(expectedUrl) {
        cy.get(this.selector)
            .then(element => {
                expect(element.prop('href')).to.equal(expectedUrl);
            });
    }
}