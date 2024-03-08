describe('web testing', () => {
  beforeEach(()=>{
    cy.visit('')
  })

  it('failed login- wrong cridential', () => {
    cy.get('[data-test="username"]').type('user not registerd')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain.text', "do not match")
  })

  it('failed login - user lock out', () => {
    cy.get('[data-test="username"]').type('locked_out_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain.text', "locked out")
  })

  it('success login', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('.title').should('contain.text', "Products")
  })

  it.skip('failed login - empty username', () => {
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain.text', "Username is required")
  })

  
})