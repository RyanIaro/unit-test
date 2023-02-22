describe('First test in cypress', () => {
  it('cypress runs correctly', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('children').click();
    cy.url().should('contains', 'traversal');
  })
  
  it('app runs correctly', () => {
    cy.visit('http://localhost:3000')
    cy.get('#add-todo').type('Lorem Ipsum');
  })
  
})