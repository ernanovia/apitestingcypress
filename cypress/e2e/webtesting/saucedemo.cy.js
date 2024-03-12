import loginPage from "../../support/pageObject/userPage"
const userr = require('../../fixtures/users.json')

describe('web testing', () => {
  beforeEach(()=>{
    cy.visit('')
  })

  it.only('success login using POM', () => {
    loginPage.inputUsername(userr[0].username)
    loginPage.inputPassword(userr[0].password)
    loginPage.clickloginButton()
    loginPage.verifyProduct(userr[0].title)
  })

  it('success login with fixtures', () => {
    cy.fixture('users.json').then((user)=> {
      const datauser = user[0];
      cy.login(datauser.username, datauser.password)
    cy.get('.title').should('have.text', 'Products')
    });
  })

  it('success login with custom login', () => {
    cy.login('standard_user','secret_sauce')
    cy.get('.title').should('have.text', 'Products')
  })

  it('success login', () => {
    // cy.get('[data-test="username"]').type('standard_user')
    cy.ketik('[data-test="username"]','standard_user' )
    cy.ketik('[data-test="password"]','secret_sauce')
    // cy.get('[data-test="login-button"]').click()
    cy.klik('[data-test="login-button"]')
    cy.get('.title').should('contain.text', "Products")
  })

  it('failed login- wrong cridential', () => {
    cy.get('[data-test="username"]').type('user not registerd')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    // cy.get('[data-test="error"]').should('contain.text', "do not match")
    cy.verifyContain('[data-test="error"]', 'do not match')
  })

  it('failed login - user lock out', () => {
    cy.get('[data-test="username"]').type('locked_out_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    // cy.get('[data-test="error"]').should('contain.text', "locked out")
    cy.verifyContain('[data-test="error"]', 'locked out')
  })

  it('failed login - empty username', () => {
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    // cy.get('[data-test="error"]').should('contain.text', "Username is required")
    cy.verifyContain('[data-test="error"]', 'Username is required')
  })

  
})