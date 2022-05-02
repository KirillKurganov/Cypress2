import { BasePage } from '../../base';
import { Label } from "../../controls";
import { ListOfBooks } from "./listOfBooks";
import { Link } from "../../controls";

export class AllProductsPage extends BasePage {

    constructor(route = '') {
        super(route);
        this.titleSelector = '.page-header h1';
        this.warningMessageSelector = 'div.alert-warning';
        this.productListSelector = 'div ol';
        this.homeLinkSelector = '.breadcrumb a';
    }

    get title() {
        return new Label(this.titleSelector);
    }

    get warningMessage() {
        return new Label(this.warningMessageSelector);
    }

    get listOfBooks() {
        return new ListOfBooks(this.productListSelector)
    }

    get homeLink() {
        return new Link(this.homeLinkSelector);
    }
}