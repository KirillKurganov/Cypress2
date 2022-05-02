import { Section } from "../../controls";
import { Image } from "../../controls";
import { Icon } from "../../controls";
import { Label } from "../../controls";
import { Button } from "../../controls";

export class ProductSection extends Section {

    constructor(selector) {
        super(selector);
        this.productImageSelector = 'div.image_container img';
        this.productRatingSelector = 'div.image_container+p';
        this.productTitleSelector = 'div.image_container~h3';
        this.productPriceSelector = 'div.product_price p.price_color';
        this.addToBasketButtonSelector = '.product_pod button';
    }

    get productImage() {
        return new Image(this.productImageSelector);
    }

    get productRatingIcon() {
        return new Icon(this.productRatingSelector);
    }

    get productTitle() {
        return new Label(this.productTitleSelector);
    }

    get productPrice() {
        return new Label(this.productPriceSelector);
    }

    get addToBasketButton() {
        return new Button(this.addToBasketButtonSelector);
    }

    openTheProductByIndex(index) {
        this.productImage.getCurrentElement().eq(index).click();
    }

    elementByIndexShouldBeVisible(element, index) {
        switch(element) {
            case 'image':
                this.productImage.getCurrentElement().eq(index).should('be.visible');
                break;

            case 'rating':
                this.productRatingIcon.getCurrentElement().eq(index).should('be.visible');
                break;

            case 'title':
                this.productTitle.getCurrentElement().eq(index).should('be.visible');
                break;

            case 'price':
                this.productPrice.getCurrentElement().eq(index).should('be.visible');
                break;

            case 'addToBasketButton':
                this.addToBasketButton.getCurrentElement().eq(index).should('be.visible');
                break;

            default:
                throw new Error(`Incorrect element type ${element} is passed to method`);

        }
    }
}