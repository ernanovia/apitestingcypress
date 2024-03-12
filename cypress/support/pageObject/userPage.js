class LoginPage {
    
    username = '[data-test="username"]'
    password = '[data-test="password"]'
    loginBtn = '[data-test="login-button"]'
    errorMsg = '[data-test="error"]'
    title = '.title'

    visit() {
        cy.login('/login')
    }

    inputUsername(username) {
        cy.get(this.username).type(username)
    }

    inputPassword(password) {
        cy.get(this.password).type(password)
    }

    clickloginButton() {
        cy.get(this.loginBtn).click()
    }

    verifyProduct(title) {
        cy.get(this.title).should('have.text', title)
    }
    
};

export default new LoginPage()

