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

  it('should allow user to enter city and submit', () => {
    cy.get('#form-input').type('atlanta');
    cy.get('#form-button').click();
  })


  it('should make API request and receive success response', () => {
    cy.intercept({
      method: 'GET',
      path: '**/onecall?lat=33.749&lon=-84.388'
    }).as('oneCallResponse')

    cy.wait('@oneCallResponse')
    cy.get('@oneCallResponse').then(xhr => {
      console.log('xhr response', xhr)
      expect(xhr.response.statusCode).to.eq(200)
    })
  })

  it('should render Forecast component content', () => {
    cy.get('#forecast-container').should('exist')
  })

  it('should render CurrentDay component content', () => {
    cy.get('#currentday-container').should('exist')
  })

  it('should render CurrentDayDetails component content', () => {
    cy.get('#currentday-details-container').should('exist')
  })

  it('should render UpcomingDays component content', () => {
    cy.get('#upcomingdays-details-container').should('exist')
  })
})