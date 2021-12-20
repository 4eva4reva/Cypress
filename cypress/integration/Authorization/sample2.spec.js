describe('Авторизация с неверным паролем', () => {
    it('Gets, types and asserts', () => {
        cy.viewport(1920, 1080)
        cy.visit('https://speak.help')
  
        cy.contains('Войти').click()
  
        cy.contains('Зарегистрироваться')
  
        cy.get('[type="email"]')
          .type('homyak1059@gmail.com')
          .should('have.value', 'homyak1059@gmail.com')
        
        cy.get('[type="password"]')
          .type('abcsdwW2')

        cy.get('div.MuiGrid-root.standart-margin-container.standard-vert-margin.MuiGrid-container.MuiGrid-direction-xs-column.MuiGrid-align-items-xs-center  > button')
          .click()
        
        cy.contains('Неверная попытка входа в систему')
  })
})