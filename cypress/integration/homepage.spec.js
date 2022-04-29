describe('Clutch Weather App', () => {
  
  it('should render home page content', () => {
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

  //verify onecall response
  it('should verify correct request and response', () => {
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

  //forecast 
  it('should render Forecast component', () => {
    cy.get('#forecast-container').should('exist')
  })
  //current day 
  it('should render CurrentDay component', () => {
    cy.get('#currentday-container').should('exist')
  })

  //current day details
  it('should render CurrentDayDetails component', () => {
    cy.get('#currentday-details-container').should('exist')
  })

  //upcoming days 
  it('should render UpcomingDays component', () => {
    cy.get('#upcomingdays-details-container').should('exist')
  })
})
