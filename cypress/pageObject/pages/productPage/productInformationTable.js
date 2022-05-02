import { Table } from "../../controls";

export class ProductInformationTable extends Table {

    constructor(selector) {
        super(selector);
        this.titleSelector = 'th';
        this.contentSelector = 'td';
    }

    verifyTitleTextByRaw(raw, expectedText) {
        cy.get(this.selector).find(this.tableRawSelector).eq(raw).find(this.titleSelector)
            .then(title => {
                expect(title.text()).to.equal(expectedText);
            });
    }

    verifyContentByRaw(raw, expectedContent) {
        cy.get(this.selector).find(this.tableRawSelector).eq(raw).find(this.contentSelector).
            then(content => {
                expect(content.text()).to.equal(expectedContent);
        });
    }
}