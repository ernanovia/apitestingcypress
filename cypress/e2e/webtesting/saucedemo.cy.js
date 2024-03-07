describe('web testing', () => {
  it('login', () => {
    cy.visit('https://saucedemo.com')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('.title').should('contain.text', "Products")
  })
})