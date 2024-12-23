describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    // cy.login("jaunius", "password")
    cy.contains('button', 'Jaunius').should('be.visible')
  })
})