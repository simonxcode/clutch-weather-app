describe('renders the home page', () => {
  it('render correctly', () => {
    cy.visit('/')
    cy.get('#homepage').should('exist')
  })
})