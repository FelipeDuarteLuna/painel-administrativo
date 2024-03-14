import { getAdminTitle, getTitle } from '../support/app.po';

describe('Painel Adiministrativo', () => {
  beforeEach(() => cy.visit('https://painel-administrativo-beige.vercel.app/dashboard'));

  it('Accessing Painel Adiministrativo', () => {

    // Para pegar o título do Header "Admin Panel"
    getTitle().contains('Admin Panel');

    // Para pegar o título "Big Numbers"
    getAdminTitle().should('have.text', 'Admin');

    cy.get('.wrapper__custom-card mat-card-content').should('contain', '18');

      // Esperar 4 segundos
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      //cy.wait(1000);

    // Clicar em uma linha da tabela para acessar detalhes do usuário
    //cy.get('mat-header-cell *matHeaderCellDef').first().should('be.visible').click();

    // Verificar se a URL mudou para a página de detalhes do usuário
    //cy.url().should('include', 'https://painel-administrativo-beige.vercel.app/users'); // Substitua '/user-details' pela rota real da página de detalhes do usuário
  });
  
});
