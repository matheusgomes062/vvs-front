/* eslint-disable no-alert */
describe('Working with url shortener input', () => {
  it('should load url shortener page', () => {
    cy.visit('http://localhost:3333')
    cy.clearCookies({ log: true })
    cy.clearLocalStorage('your item', { log: true })
  })

  it('should fill url shortener input', () => {
    cy.get('.url_shortener').as('url_shortener')
    cy.get('@url_shortener').clear()
    cy.get('@url_shortener').type('Some Invalid URL', { delay: 50 })
  })

  it('should mark url as invalid', () => {
    const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
    const regex = new RegExp(expression)
    cy.get('.url_shortener').as('url_shortener')
    cy.get('@url_shortener').clear()

    const t = 'Some Invalid URL'
    cy.get('@url_shortener').type(t, { delay: 50 })

    if (t.match(regex))
      alert('Successful match')

    else
      alert('No match')
  })

  it('should mark url as valid', () => {
    const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
    const regex = new RegExp(expression)
    cy.get('.url_shortener').as('url_shortener')
    cy.get('@url_shortener').clear()

    const t = 'https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url'
    cy.get('@url_shortener').type(t, { delay: 50 })

    if (t.match(regex))
      alert('Successful match')

    else
      alert('No match')
  })

  it('submit url', () => {
    cy.contains('GO').click()
  })

  // it('should display error message', () => {
  //   cy.get('.alert-error')
  //     .should('be.visible')
  //     .and('contain', 'Login and/or password are wrong.')
  // })
})
