describe('template spec', () => {
  it('passes', () => {
    cy.visit(Cypress.env('orange_url'))
    cy.get('[name="username"]').type(Cypress.env('username'))
    cy.get('[name="password"]').type(Cypress.env('password'))
    cy.get('[type="submit"]').click()
    cy.url().should('include', 'dashboard/index')
  })
})