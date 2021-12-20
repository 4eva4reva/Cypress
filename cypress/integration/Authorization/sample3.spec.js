describe('Авторизация с корректными данными', () => {
    it('Gets, types and asserts', () => {
        cy.viewport(1920, 1080)
        cy.visit('https://speak.help')
  
        cy.contains('Войти').click()
  
        cy.contains('Зарегистрироваться')
  
        cy.get('[type="email"]')
          .type('speaktesttest@gmail.com')
          .should('have.value', 'speaktesttest@gmail.com')
        
        cy.get('[type="password"]')
          .type('Asdfgh1!')

        cy.get('div.MuiGrid-root.standart-margin-container.standard-vert-margin.MuiGrid-container.MuiGrid-direction-xs-column.MuiGrid-align-items-xs-center  > button')
          .click()
        
        cy.url().should('include', '/client')
  })
})