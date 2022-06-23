describe('Working with inputs', () => {
  it('should load login page', () => {
    cy.visit('http://localhost:3333')
    cy.clearCookies({ log: true })
    cy.clearLocalStorage('your item', { log: true })
    // cy.title().should('include', 'TheWiseDev - Log in')
  })

  it('should fill username', () => {
    cy.get('.user_email').as('username')
    cy.get('@username').clear()
    cy.get('@username').type('Some Invalid Name', { delay: 50 })
  })

  it('should fill password', () => {
    cy.get('.user_password').as('password')
    cy.get('@password').clear()
    cy.get('@password').type('Some Invalid Password', { delay: 50 })
  })

  it('submit login form', () => {
    cy.contains('GO').click()
    cy.get('.user_password').type('Some Invalid Password')
  })

  it('should display error message', () => {
    cy.get('.alert-error')
      .should('be.visible')
      .and('contain', 'Login and/or password are wrong.')
  })
})
