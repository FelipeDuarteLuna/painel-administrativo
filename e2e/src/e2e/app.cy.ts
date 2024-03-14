import { getAdminTitle, getTitle } from '../support/app.po';

describe('Painel Adiministrativo', () => {
  beforeEach(() => cy.visit('/'));

  it('Must display Page Header Title', () => {

    getTitle().contains('Admin Panel');
  });

  it('It should display the subtitle of the page header', () => {

    getAdminTitle().should('have.text', 'Admin');
  });

  it('Totalizando o retorno dos usuários da API', () => {
      
    cy.get('.wrapper__custom-card mat-card-content').should('contain', '18');
  });

});
