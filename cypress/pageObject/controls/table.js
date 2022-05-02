import { BaseElement } from "../base";

export class Table extends BaseElement {

    constructor(selector) {
        super(selector);
        this.tableRawSelector = 'tr';
    }
}