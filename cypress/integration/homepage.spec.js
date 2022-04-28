describe('Clutch Weather App', () => {
  it('should render home page content', () => {
    cy.visit('/')
    cy.get('#homepage').should('exist')
  })

  it('should render home page content', () => {
    cy.get('#page-header').should('exist')
    cy.get('#form-input').should('exist')
    cy.get('#form-button').should('exist')
  })

  it('should render home page content text', () => {
    cy.get('#page-header').should('have.text', 'Clutch Weather App')
    cy.get('#form-button').should('have.text', 'search')
  })

  it('should allows user to input a city', () => {
    cy.get('#form-input').type('atlanta');
  })
})
