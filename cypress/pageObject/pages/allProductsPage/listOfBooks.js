import { List } from "../../controls";
import { ProductSection } from "./productSection";

export class ListOfBooks extends List {

    constructor(selector) {
        super(selector);
        this.productSelector = 'article[class="product_pod"]';
    }

    get product() {
        return new ProductSection(this.productSelector);
    }

    productByIndexShouldBeVisible(index) {
        this.product.getCurrentElement().eq(index).should('be.visible');
    }
}