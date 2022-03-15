describe('Author Blog Post detailed page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })


it('Dynamic routing text and link verification', () => {
  
    cy.get('[data-cy="linktitle"]').should('be.visible').contains('Dynamic Routing and Static Generation').click()
    cy.wait(3000)
    cy.url().should('include', '/posts/dynamic-routing')
    cy.title().should('eq', 'Dynamic Routing and Static Generation | Next.js Blog Example with Markdown')
       
    }) 

})