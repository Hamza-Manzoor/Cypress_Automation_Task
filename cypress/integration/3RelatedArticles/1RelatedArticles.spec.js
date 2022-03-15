describe('Related Articles', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })

it('More stories heading', () => {
  
    cy.get('[data-cy="morestory"]').should('be.visible').contains('More Stories')
   
    })

it('More Stories Blog A', () => {

    cy.get('[data-cy="postlinka"]').should('be.visible').contains('Learn How to Pre-render Pages Using Static Generation with Next.js').click()
    cy.wait(3000)
    cy.url().should('include', '/posts/hello-world')
    cy.title().should('eq', 'Learn How to Pre-render Pages Using Static Generation with Next.js | Next.js Blog Example with Markdown')
         
    })   



})