describe('Clutch Weather App', () => {

  it('should render home page', () => {
    cy.visit('/')
    cy.get('[data-cy=homepage]').should('exist')
  })

  it('should render home page content', () => {
    cy.get('[data-cy=page-header]').should('exist')
    cy.get('[data-cy=form-container]').should('exist')
    cy.get('[data-cy=form-input]').should('exist')
    cy.get('[data-cy=form-button]').should('exist')
  })

  it('should render home page content text', () => {
    cy.get('[data-cy=page-header]').should('have.text', 'Clutch Weather App')
    cy.get('[data-cy=form-button]').should('have.text', 'search')
  })

  it('should allow a city to be entered and searched', function() {
    cy.on('uncaught:exception', (err, runnable, promise) => {
      if (promise) return false
    })
    cy.get('[data-cy=form-input]').type('atlanta');
    cy.get('[data-cy=form-button]').click();
  });
})
