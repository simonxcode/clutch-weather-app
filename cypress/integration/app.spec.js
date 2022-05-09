describe('Clutch Weather App', () => {

  it('should render ClutchWeatherApp content', () => {
    cy.visit('/')
    cy.get('[data-cy=homepage]').should('exist')
  })

  it('should render Header content', () => {
    cy.get('[data-cy=page-header]').should('exist')
        cy.get('[data-cy=page-header]').should('have.text', 'Clutch Weather App')
  })

  it('should render Form content', () => {
    cy.get('[data-cy=form-container]').should('exist')
    cy.get('[data-cy=form-input]').should('exist')
    cy.get('[data-cy=form-button]').should('exist')
    cy.get('[data-cy=form-button]').should('have.text', 'search')
  })

  it('should allow a city to be entered and searched on Form', function() {
    cy.on('uncaught:exception', (err, runnable, promise) => {
      if (promise) return false
    })
    cy.get('[data-cy=form-input]').type('atlanta');
    cy.get('[data-cy=form-button]').click();
  })

  it('should render CurrentDay content', () => {
    cy.get('[data-cy=current-day]').should('exist')
  })

  it('should render CurrentDayDetails content', () => {
    cy.get('[data-cy=current-day-details]').should('exist')
  })

  it('should render CurrentDayDetailsItems content', () => {
    cy.get('[data-cy=current-day-details-items]').should('have.length', 7)
  })

  it('should render UpcomingDays content', () => {
    cy.get('[data-cy=upcoming-days]').should('exist')
  })

  it('should render UpcomingDaysDetails content', () => {
    cy.get('[data-cy=upcoming-days-details]').should('have.length', 5)
  })

})
