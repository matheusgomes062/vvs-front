describe('Login with Fixtures Data', () => {
  it('should try to login', () => {
    cy.visit('http://localhost:3333')

    cy.fixture('user').then((user) => {
      const username = user.username
      const password = user.password

      cy.get('.user_login').type(username)
      cy.get('.user_password').type(password)
      cy.contains('Sign in').click()
    })
  })
})
