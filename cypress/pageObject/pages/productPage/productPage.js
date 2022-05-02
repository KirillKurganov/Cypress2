import { BasePage } from "../../base";
import { ProductInformationTable } from "./productInformationTable";

export class ProductPage extends BasePage {

    constructor(bookTitle = '') {
        super(bookTitle ? `/catalogue/${bookTitle}/index.html` : '');
        this.bookImageSelector = '#product_gallery img';
        this.productDescriptionSelector = '#product_description+p';
        this.productInformationTableSelector = 'table';
    }

    get productInformationTable() {
        return new ProductInformationTable(this.productInformationTableSelector);
    }
}