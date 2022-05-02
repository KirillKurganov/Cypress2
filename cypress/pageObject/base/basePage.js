export class BasePage {

    constructor(route='') {
        this.url = Cypress.env('BASE_URL');
        this.route = route;
    }

    navigateTo() {
        cy.visit(`${this.url}${this.route}`);
    }

    verifyUrlIsCorrect(expectedUrl) {
        cy.url().should('equal', expectedUrl);
    }
}