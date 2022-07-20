describe('Working with url shortener input', () => {
  it('should load url shortener page', () => {
    cy.visit('http://localhost:3333')
    cy.clearCookies({ log: true })
    cy.clearLocalStorage('your item', { log: true })
  })

  it('should fill url shortener input', () => {
    cy.get('.user_shortener').as('user_shortener')
    cy.get('@user_shortener').clear()
    cy.get('@user_shortener').type('Some Invalid URL', { delay: 50 })
  })

  it('submit url', () => {
    cy.contains('GO').click()
    cy.get('.user_shortener').type('Some Invalid URL')
  })

  // it('should display error message', () => {
  //   cy.get('.alert-error')
  //     .should('be.visible')
  //     .and('contain', 'Login and/or password are wrong.')
  // })
})
