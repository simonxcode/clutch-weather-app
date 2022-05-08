describe('Clutch Weather App', () => {
  it('should render home page', () => {
    cy.visit('/')
    cy.get('#homepage').should('exist')
  })

  it('should render home page content', () => {
    cy.get('#page-header').should('exist')
    cy.get('#form-container').should('exist')
    cy.get('#form-input').should('exist')
    cy.get('#form-button').should('exist')
  })

  it('should render home page content text', () => {
    cy.get('#page-header').should('have.text', 'Clutch Weather App')
    cy.get('#form-button').should('have.text', 'search')
  })

  it('should allow a city to be entered and searched', function() {
    cy.on('uncaught:exception', (err, runnable, promise) => {
      if(promise) return false
    })
    cy.visit('http://localhost:8000/');
    cy.get('#form-input').type('atlanta');
    cy.get('#form-button').click();
  });
})
