describe('Device Tests', () => {
  const url = 'http://localhost:3333'
  it('720p', () => {
    cy.viewport(1280, 720)
    cy.visit(url)
    cy.wait(3000)
  })

  it('1080p', () => {
    cy.viewport(1920, 1080)
    cy.visit(url)
    cy.wait(3000)
  })

  it('Iphone X', () => {
    cy.viewport('iphone-x')
    cy.visit(url)
    cy.wait(3000)
  })

  it('iPad Mini', () => {
    cy.viewport('ipad-mini')
    cy.visit(url)
    cy.wait(3000)
  })

  it('Macbook 15', () => {
    cy.viewport('macbook-15')
    cy.visit(url)
    cy.wait(3000)
  })
})
