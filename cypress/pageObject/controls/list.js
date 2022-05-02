import { BaseElement } from "../base";

export class List extends BaseElement {

    constructor(selector) {
        super(selector);
        this.listItemSelector = 'li';
    }

    verifyNumberOfItems(number) {
        cy.get(`${this.selector} ${this.listItemSelector}`)
            .then(listItems => {
                expect(listItems).to.have.length(number)
            });
    }
}