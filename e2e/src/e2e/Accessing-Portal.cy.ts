import { getAdminTitle, getTitle } from '../support/app.po';

describe('Painel Adiministrativo', () => {
  beforeEach(() => cy.visit('https://painel-administrativo-beige.vercel.app/dashboard'));

  it('Accessing Painel Adiministrativo', () => {

    // Para pegar o título do Header "Admin Panel"
    getTitle().contains('Admin Panel');

    // Para pegar o título "Big Numbers"
    getAdminTitle().should('have.text', 'Admin');

    cy.get('.wrapper__custom-card mat-card-content').should('contain', '18');
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('User Details', function() {
    /* ==== Generated with Cypress Studio ==== */
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(3000);

        cy.get(':nth-child(2) > .cdk-column-name').click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(5000);
        cy.get('.voltar > .mdc-button__label').click();
        cy.get('svg.ng-tns-c2400438669-3').click();
        cy.get('#mat-option-5 > .mdc-list-item__primary-text').click();

    /* ==== End Cypress Studio ==== */
  });
});
