// Para pegar o título do Header "Admin Panel"
export const getTitle  = () => cy.get('h1');

// Para pegar o título "Admin"
export const getAdminTitle = () => cy.get('section:nth-child(1) > h2', { timeout: 10000 }).should('have.text', 'Admin');

