describe('Авторизация с незарегистрированным емейлом', () => {
    it('Gets, types and asserts', () => {
        cy.viewport(1920, 1080)
        cy.visit('https://speak.help')
  
        cy.contains('Войти').click()
  
        cy.contains('Зарегистрироваться')
  
        cy.pause()
        
        cy.get('[type="email"]')
          .type('fake@email.com')
          .should('have.value', 'fake@email.com')
        
        cy.get('[type="password"]')
          .type('abcsdwW2')

        cy.get('div.MuiGrid-root.standart-margin-container.standard-vert-margin.MuiGrid-container.MuiGrid-direction-xs-column.MuiGrid-align-items-xs-center  > button')
          .click()
        
        cy.contains('Неверная попытка входа в систему')
  })
})
